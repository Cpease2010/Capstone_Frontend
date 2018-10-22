<template>
  <div class="homeStyle">
    <div class="leftSide">
      <div class="middleSection">
        <h3>SignUp</h3>
      </div>
      <div class="middleSection">
        <h3>Track Your Finances</h3>
      </div>
    </div>
    <div class="rightSide">
      <div class="middleSection">
        <h3>Add Bill & Pay Schedule</h3>
      </div>
      <div class="middleSection">
        <h3>Get Closer to Financial Goals</h3>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.homeStyle {
  height: 100%;
  display: flex;
  background: red;
}
.leftSide, .rightSide {
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100%;
}
.middleSection {
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
}

</style>
