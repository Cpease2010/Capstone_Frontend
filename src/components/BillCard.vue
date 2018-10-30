<template>
  <b-col md="3 p-1">
    <b-card bg-variant="" text-variant="black" class="m-0 text-center">
      <div v-show="!edit">
        <b-list-group>
          <b-list-group-item variant="dark">{{bill.companyName.toUpperCase()}}</b-list-group-item>
          <b-list-group-item variant="dark">{{bill.billName.toUpperCase()}}</b-list-group-item>
          <b-list-group-item variant="warning"><b>Day {{bill.dueDate}}</b></b-list-group-item>
          <b-list-group-item variant="success"><b>${{bill.amountDue}}</b></b-list-group-item>
        </b-list-group>
      </div>
      <b-button-toolbar>
        <b-button-group class="mx-auto my-3 p-1">
          <b-btn @click="showEditBill">Edit</b-btn>
          <b-btn @click="deleteBill">Delete</b-btn>
          <b-btn v-if="edit" @click="editBill">Submit</b-btn>
        </b-button-group>
      </b-button-toolbar>
      <b-container fluid>
        <form v-show="edit" @submit.prevent.self="editBill">
          <b-form-group>
            <b-form-input :type="'text'" v-model="bill.companyName" required></b-form-input>
            <b-form-input :type="'text'" v-model="bill.billName" required></b-form-input>
            <b-form-input :type="'number'" v-model="bill.dueDate" required></b-form-input>
            <b-form-input :type="'number'" step="0.01" v-model="bill.amountDue" required></b-form-input>
          </b-form-group>
        </form>
      </b-container>
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