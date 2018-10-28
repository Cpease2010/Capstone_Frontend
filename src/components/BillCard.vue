<template>
  <b-card bg-variant="success" text-variant="white" class="text-center">
    <h3 class="card-text">Company Name: {{bill.companyName.toUpperCase()}}</h3>
    <h3 class="card-text">Bill Name: {{bill.billName.toUpperCase()}}</h3>
    <h3 class="card-text">Due Date: {{bill.dueDate.slice(0,10)}}</h3>
    <h3 class="card-text">Amount Due: ${{bill.amountDue}}</h3>

    <b-btn @click="showEditBill">Edit</b-btn>
    <b-btn v-on:click="deleteBill">Delete</b-btn>
    <b-container fluid class="my-3">
      <form v-show="edit" @submit.prevent.self="editBill">
        <b-form-group>
          <b-row>
                <b-col sm="12" class="p-0">
                    <b-col sm="7 mx-auto">
              <b-form-input :type="'text'" :placeholder="bill.companyName"  required="true" readonly="true"></b-form-input>
              <b-form-input :type="'text'" :placeholder="bill.billName" required="true"></b-form-input>
              <b-form-input :type="'number'" :placeholder="bill.amountDue" required="true"></b-form-input>
              <b-form-input :type="'date'" :placeholder="bill.dueDate" required="true"></b-form-input>
            </b-col>
                </b-col>
              </b-row>
        </b-form-group>
      </form>
    </b-container>
          <b-button v-show="edit" type="submit">Add Bill</b-button>
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
