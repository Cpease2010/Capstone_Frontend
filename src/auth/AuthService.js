// src/Auth/AuthService.js

import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'

var options = {
  auth: {
    responseType: 'id_token',
    params: {scope: 'openid email'}
  }
};

export default class AuthService {

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'undercoverdev.auth0.com',
    clientID: 'khfWDFwh0V5Oes6oD6dt1ROTPfZaWroJ',
    redirectUri: 'https://foundationfinance-f81fc.firebaseapp.com/callback',
    responseType: 'token id_token',
    scope: 'openid profile email',
    options
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log(authResult.userProfile, authResult)
        this.setSession(authResult)
        router.replace('myaccount')
      } else if (err) {
        router.replace('/')
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )    
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('user_id', authResult.idTokenPayload.sub)
    localStorage.setItem('user_name', authResult.idTokenPayload.name)
    localStorage.setItem('email', authResult.idTokenPayload.email)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_name')
    localStorage.removeItem('email')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.replace('/')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}