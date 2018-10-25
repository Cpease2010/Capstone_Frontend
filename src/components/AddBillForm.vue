<template>
  <div class="formStyle">
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
          <button type="submit" value="Submit Bill"> Submit </button>
        </form>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'AddBillForm',
  props: ['userID'],
  data () {
    return {
      //******FIX THIS ROUTE TO BE USER SPECIFIC */
      addBillURL: "https://corys-capstone.herokuapp.com/bills/add/",
      addBillObject: {
        companyName: "",
        billName: "",
        dueDate: "",
        amountDue: ""
      }
    }
  },
  methods: {
    addBill: function (){
      this.$http.put(this.addBillURL+this.userID, this.addBillObject)
      .then(result => window.location.reload())
    }
  }
}
</script>

<style scoped>
.billFormStyle {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 3px solid black;
  width: 30%;
  margin: 10px auto;
  padding: 10px;
}

.formStyle {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>

