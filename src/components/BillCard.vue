<template>
    <b-card bg-variant="success" 
            text-variant="white" 
            class="text-center">
      <h3 class="card-text">Company Name: {{bill.companyName.toUpperCase()}}</h3>
      <h3 class="card-text">Bill Name: {{bill.billName.toUpperCase()}}</h3>
      <h3 class="card-text">Due Date: {{bill.dueDate.slice(0,10)}}</h3>
      <h3 class="card-text">Amount Due: ${{bill.amountDue}}</h3>
      <b-btn>Edit</b-btn>
      <b-btn v-on:click="deleteBill">Delete</b-btn>
    </b-card>
</template>

<script>
  export default {
    name: 'BillCard',
    props: ['bill'],
    methods: {
      deleteBill: function () {
        this.$emit("deleteBill",this.bill._id)
      }
  }
  }
</script>

<style scoped>

</style>
