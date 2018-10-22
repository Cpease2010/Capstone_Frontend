<template>
  <div>
    <b-navbar class="navStyle" variant="faded">
      <b-navbar-nav>
        <b-btn size="lg" v-b-toggle.collapse1>Menu</b-btn>
        <b-collapse id="collapse1">
          <b-nav-item>
            <router-link to="Home">
              Home
            </router-link>
          </b-nav-item>
          <b-nav-item>About</b-nav-item>
          <b-nav-item>How It Works</b-nav-item>
          <b-nav-item>
            <router-link to="MyAccount">
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
  name: 'Nav'
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
