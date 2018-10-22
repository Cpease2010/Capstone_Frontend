<template>
  <div>
    <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
      <p class="card-text">{{bill.companyName}}</p>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'BillCard',
    props: ['bill']
  }
</script>

<style scoped>
.card-deck .card {
  flex: none;
  width: 30%;
  margin: 20px;
}
</style>
