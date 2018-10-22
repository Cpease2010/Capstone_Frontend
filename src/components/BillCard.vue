<template>
    <b-card bg-variant="success" 
            text-variant="white" 
            footer="Click To Edit"
            class="text-center">
      <h3 class="card-text">Company Name: {{bill.companyName.toUpperCase()}}</h3>
      <h3 class="card-text">Bill Name: {{bill.billName.toUpperCase()}}</h3>
      <h3 class="card-text">Due Date: {{bill.dueDate.slice(0,10)}}</h3>
      <h3 class="card-text">Amount Due: ${{bill.amountDue}}</h3>
    </b-card>
</template>

<script>
  export default {
    name: 'BillCard',
    props: ['bill']
  }
</script>

<style scoped>

</style>
