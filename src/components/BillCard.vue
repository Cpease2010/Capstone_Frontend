<template>
    <b-card bg-variant="success" 
            text-variant="white" 
            class="text-center">
      <h3 class="card-text">Company Name: {{bill.companyName.toUpperCase()}}</h3>
      <h3 class="card-text">Bill Name: {{bill.billName.toUpperCase()}}</h3>
      <h3 class="card-text">Due Date: {{bill.dueDate.slice(0,10)}}</h3>
      <h3 class="card-text">Amount Due: ${{bill.amountDue}}</h3>
      <b-btn @click="showEditBill">Edit</b-btn>
      <b-btn v-on:click="deleteBill">Delete</b-btn>
      <form v-show="edit" @submit.prevent.self="editBill">
        <label for="companyName">Company Name: </label>
        <input type="text" v-model="bill.companyName" name="companyName" id="companyName">
        <br>
        <label for="billName">Bill Name: </label>
        <input type="text" v-model="bill.billName"  name="billName" id="billName">
        <br>
        <label for="dueDate">Due Date: </label>
        <input type="text" v-model="bill.dueDate" name="dueDate" id="dueDate">
        <br>
        <label for="amountDue">Amount Due: </label>
        <input type="number" v-model="bill.amountDue" name="amountDue" id="amountDue">
        <br>
        <button type="submit" >Submit Changes</button>
      </form>
    </b-card>
</template>

<script>
  export default {
    name: 'BillCard',
    props: ['bill'],
    data(){
      return {
        edit : false
      }
    },
    methods: {
      deleteBill: function () {
        this.$emit("deleteBill",this.bill._id)
      },
      editBill: function (){
        this.$emit("editBill", this.bill)
      },
      showEditBill: function () {
        this.edit = !this.edit
      }
    }
  }
</script>

<style scoped>

</style>
