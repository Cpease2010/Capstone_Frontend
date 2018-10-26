<template>
  <div>
    <b-navbar class="navStyle" variant="faded">
      <b-navbar-nav>
        <b-nav-item>
          <b-btn v-b-toggle.collapse1>Menu</b-btn>
        </b-nav-item>
        <b-nav-item>
          <b-btn v-if="!authenticated" @click="auth.login()">LogIn</b-btn>
        </b-nav-item>
        <b-nav-item>
          <b-btn v-if="authenticated" @click="auth.logout()">LogOut</b-btn>
        </b-nav-item>
        <b-collapse id="collapse1">
          <b-nav-item>
            <router-link to="/">
              Home
            </router-link>
          </b-nav-item>
          <b-nav-item>About</b-nav-item>
          <b-nav-item>How It Works</b-nav-item>
          <b-nav-item>
            <router-link to="/myaccount">
              My Account
            </router-link>
          </b-nav-item>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: ['auth','authenticated']
}
</script>

<style scoped>
.navStyle{
  background: black;
  display: flex;
  flex-direction: row-reverse;
}
.navbar-light .navbar-nav .nav-link{
  color: white;
}
</style>
