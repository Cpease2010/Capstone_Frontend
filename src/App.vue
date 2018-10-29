<template>
  <div id="mainStyle">
    <Nav 
      :auth='auth'
      :authenticated="authenticated"/>
    <!-- <b-btn v-if="!authenticated" @click="login()">AuthIn</b-btn>
    <b-btn v-if="authenticated" @click="logout()">AuthOut</b-btn> -->
    <router-view 
      :auth="auth" 
      :authenticated="authenticated">
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import AuthService from './Auth/AuthService'

let auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  data() {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>
