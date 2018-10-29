<template>
  <div>
    <b-container fluid>
        <form @submit.prevent.self="addBill">
      <div class="mx-auto p-3">
          <b-button class="mx-auto" type="submit">Add Bill</b-button>
      </div>
      <div>
          <b-row>
            <b-col md="12 p-0">
              <b-col md="12 mx-auto">
                  <b-form-input :type="'text'" placeholder="Company Name" v-model="addBillObject.companyName" required></b-form-input>
                  <b-form-input :type="'text'" placeholder="Bill Name" v-model="addBillObject.billName" required></b-form-input>
                  <b-form-input :type="'number'" placeholder="Amount Due" min="1" v-model="addBillObject.amountDue" required></b-form-input>
                  <b-form-input :type="'number'" placeholder="Due Date" min="1" max="31" v-model="addBillObject.dueDate"
                    required></b-form-input>
              </b-col>
            </b-col>
          </b-row>
      </div>
        </form>
    </b-container>
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
        dueDate: 0,
        amountDue: 0
      }
    }
  },
  methods: {
    addBill: function (){
      this.getUserID()
      // const userID = localStorage.getItem('user_id')
      .then(userID => 
      // console.log('hello',this.addBillURL+this.userID, this.addBillObject);
      
      this.$http.put(this.addBillURL+this.userID, this.addBillObject)
      )
      .then(result => window.location.reload())
    },
    getUserID: function (auth = this.auth) {
      return new Promise(function(resolve, reject) {
        // const userID = localStorage.getItem('user_id')
        resolve(true)
      })
    },
    toggleAdd: function () {
      this.toggleAddButton = !this.toggleAddButton
    }
  }
}
</script>

<style scoped>

</style>

