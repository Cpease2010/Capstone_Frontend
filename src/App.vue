<template>
  <div id="mainStyle">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#mainStyle {
  height: 80vh;
}
</style>
