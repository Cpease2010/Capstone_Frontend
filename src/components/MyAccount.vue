<template>
  <div>
    <div class="centerStyle">
      <h1>Welcome to you accout: <br> {{accountInfo.user_name}}</h1>
      <h1>TOTAL BILL DUE: <br> {{getTotal}}</h1>
      <AddBillForm/>
    </div>
    <b-card-group deck class="mb-3">
      <div class="billsStyle">
        <BillCard 
          v-for="bill in accountInfo.bills" 
          :key='bill.id' 
          :bill='bill' 
          v-on:deleteBill="deleteBill"
          v-on:editBill="editBill"/>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import BillCard from './BillCard'
import AddBillForm from './AddBillForm'

export default {
  name: 'MyAccount',
  props: ['auth'],
  components: {
    BillCard,
    AddBillForm
  },
  data () {
    return {
      //******FIX THIS ROUTE TO BE USER SPECIFIC */
      URLS: {
        getAccountURL: "https://corys-capstone.herokuapp.com/user/5bce3c386f9d1d0015f9cbf4",
        deleteBillURL: "https://corys-capstone.herokuapp.com/bills/",
        editBillURL: "https://corys-capstone.herokuapp.com/bills/update/"
      },
      accountInfo: [],
      }
  },
  methods: {
    deleteBill: function (bill) {
      this.$http.delete(this.URLS.deleteBillURL+this.accountInfo._id+"/"+bill)
      .then(result => window.location.reload())
    },
    editBill: function (bill) {
      let updatedBill = {
        "bills.$.companyName": bill.companyName,
        "bills.$.billName": bill.billName,
        "bills.$.dueDate": bill.dueDate,
        "bills.$.amountDue": bill.amountDue
      }
      this.$http.put(this.URLS.editBillURL+this.accountInfo._id+"/"+bill._id,updatedBill)
      .then(result => window.location.reload())
    }
  },
  computed: {
    getTotal: function () {
      let billAmounts = 0;
      this.accountInfo.bills.forEach(bill => {
        billAmounts += bill.amountDue
      });
      return billAmounts
    }
  },
  mounted() {
    fetch(this.URLS.getAccountURL)
      .then(result => result.json())
      .then(account => this.accountInfo = account.user[0])
  }
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
  flex: 2 1 auto;
  width: 40%;
  margin: 20px;
}

.centerStyle {
  display: flex;
  flex-direction: column;
  text-align: center;
}

</style>
