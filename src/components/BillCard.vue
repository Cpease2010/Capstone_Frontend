<template>
<b-col md="3 p-1">
  <b-card bg-variant="success" text-variant="white" class="text-center">
    <h5 class="card-text">{{bill.companyName.toUpperCase()}}</h5>
    <h5 class="card-text">{{bill.billName.toUpperCase()}}</h5>
    <h5 class="card-text">{{bill.dueDate.slice(0,10)}}</h5>
    <h5 class="card-text">${{bill.amountDue}}</h5>
    <b-btn @click="showEditBill">Edit</b-btn>
    <b-btn v-on:click="deleteBill">Delete</b-btn>
    <b-container fluid class="my-3">
      <form v-show="edit" @submit.prevent.self="editBill">
        <b-form-group>
            <b-form-input :type="'text'" v-model="bill.companyName" required></b-form-input>
            <b-form-input :type="'text'" v-model="bill.billName" required></b-form-input>
            <b-form-input :type="'number'" v-model="bill.amountDue" required></b-form-input>
            <b-form-input :type="'date'" v-model="bill.dueDate" required></b-form-input>
        </b-form-group>
      </form>
    </b-container>
    <b-button v-show="edit" type="submit">Add Bill</b-button>
  </b-card>
  </b-col>
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
