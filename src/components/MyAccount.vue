<template>
  <div>
    <h1>Welcome to you accout: <br> {{accountInfo.user_name}}</h1>
    <b-card-group deck class="mb-3">
      <div class="billsStyle">
      <BillCard v-for="bill in accountInfo.bills" :key='bill.id' :bill='bill' />
      </div>
    </b-card-group>
  </div>
</template>

<script>
import BillCard from './BillCard'
export default {
  name: 'MyAccount',
  components: {
    BillCard
  },
  data () {
    return {
      //******FIX THIS ROUTE TO BE USER SPECIFIC */
      apiURL: "https://corys-capstone.herokuapp.com/user/5bcd79330c6747136febffb5",
      accountInfo: [],
      }
  },
  mounted() {
    fetch(this.apiURL)
      .then(result => result.json())
      .then(account => this.accountInfo = account.user[0])
  },
}
</script>

<style scoped>
.billsStyle{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.card-deck .card {
  /* flex: 2 1 auto; */
  width: 40%;
  margin: 20px;
}

h1{
  text-align: center;
}
</style>
