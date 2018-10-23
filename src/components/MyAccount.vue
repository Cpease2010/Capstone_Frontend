<template>
  <div>
    <div class="centerStyle">
      <h1>Welcome to you accout: <br> {{accountInfo.user_name}}</h1>
      <h1>TOTAL BILL DUE: <br> {{getTotal}}</h1>
      <b-btn size="lg" v-b-toggle.collapseAddBill click>Add Bill</b-btn>
      <b-collapse id="collapseAddBill">
        <div class="billFormStyle">
          <form @submit.prevent.self="addBill">
            <!-- <form> -->
            <label for="companyName">Company Name: </label>
            <input type="text" v-model="addBillObject.companyName" name="companyName" id="companyName">
            <br>
            <label for="billName">Bill Name: </label>
            <input type="text" v-model="addBillObject.billName" name="billName" id="billName">
            <br>
            <label for="dueDate">Due Date: </label>
            <input type="text" v-model="addBillObject.dueDate" name="dueDate" id="dueDate">
            <br>
            <label for="amountDue">Amount Due: </label>
            <input type="number" v-model="addBillObject.amountDue" name="amountDue" id="amountDue">
            <br>
            <button type="submit" value="Submit Bill" > Submit </button>
          </form>
        </div>
      </b-collapse>
    </div>
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
      URLS: {
        getAccountURL: "https://corys-capstone.herokuapp.com/user/5bce3c386f9d1d0015f9cbf4",
        addBillURL: "https://corys-capstone.herokuapp.com/bills/add/5bce3c386f9d1d0015f9cbf4",
      },
      addBillObject: {
        companyName: "",
        billName: "",
        dueDate: "",
        amountDue: ""
      },
      accountInfo: [],
      }
  },
  methods: {
    addBill: function (){
      console.log(this.addBillObject)
      this.$http.put(this.URLS.addBillURL, this.addBillObject)
      .then(result => console.log(result))
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

.centerStyle, .billFormStyle {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.billFormStyle{
  border: 3px solid black;
  width: 30%;
  margin: 10px auto;
  padding: 10px;
}
</style>
