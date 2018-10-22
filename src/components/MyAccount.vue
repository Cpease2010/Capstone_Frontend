<template>
  <b-card-group deck class="mb-3">
    <BillCard v-for="bill in accountInfo.bills" 
          :key='bill.id' 
          :bill='bill'/>
  </b-card-group>
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
      apiURL: "https://corys-capstone.herokuapp.com/user/5bcd79330c6747136febffb5",
      accountInfo: [],
      }
  },
  mounted() {
    fetch(this.apiURL)
      .then(result => result.json())
      // .then(result => console.log(result.user[0]))
      .then(account => this.accountInfo = account.user[0])
  },
}
</script>
