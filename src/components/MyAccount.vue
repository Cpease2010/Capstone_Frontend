<template>
  <div>
    <div v-if="!authenticated">
      <h1>You must sign in to access this page!</h1>
    </div>
    <div v-if="authenticated">
      <div class="centerStyle">
        <h1>Welcome to you accout: <br> {{accountInfo.user_name}}</h1>
        <h1>TOTAL BILL DUE: <br> {{getTotal}}</h1>
        <AddBillForm />
      </div>
      <b-card-group deck class="mb-3">
        <div class="billsStyle">
          <BillCard v-for="bill in accountInfo.bills" :key='bill.id' :bill='bill' v-on:deleteBill="deleteBill"
            v-on:editBill="editBill" />
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import BillCard from './BillCard'
import AddBillForm from './AddBillForm'
import { Promise } from 'bluebird';

const userID = localStorage.getItem('user_id')

export default {
  name: 'MyAccount',
  props: ['auth','authenticated'],
  components: {
    BillCard,
    AddBillForm
  },
  data () {
    return {
      //******FIX THIS ROUTE TO BE USER SPECIFIC */
      URLS: {
        getAccountURL: "https://corys-capstone.herokuapp.com/user/",
        deleteBillURL: "https://corys-capstone.herokuapp.com/bills/",
        editBillURL: "https://corys-capstone.herokuapp.com/bills/update/"
      },
      accountInfo: [],
      userID
      }
  },
  methods: {
    deleteBill: function (bill) {
      this.$http.delete(this.URLS.deleteBillURL+this.userID+"/"+bill)
      .then(result => window.location.reload())
    },
    editBill: function (bill) {
      let updatedBill = {
        "bills.$.companyName": bill.companyName,
        "bills.$.billName": bill.billName,
        "bills.$.dueDate": bill.dueDate,
        "bills.$.amountDue": bill.amountDue
      }
      this.$http.put(this.URLS.editBillURL+this.userID+"/"+bill._id, updatedBill)
      .then(result => window.location.reload())
    },
    getUserID: function (auth = this.auth) {
      return new Promise(function(resolve, reject) {
        const user = { 
          user_ID: localStorage.getItem('user_id'),
          user_name: localStorage.getItem('user_name'),
          email: localStorage.getItem('email')
          }
        resolve(user)
      })
    },
    userLogin: function (user) {
      return this.$http.post(this.URLS.getAccountURL+user.user_ID, user)
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
      this.getUserID() 
      .then(user => this.userLogin(user))
      .then(result => result.json())
      .then(account => {
        this.accountInfo = account.newUser
        this.userID = account.newUser.user_ID
        })
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
