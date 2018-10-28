<template>
  <div>
    <b-btn size="lg" v-b-toggle.collapseAddBill click>New Bill</b-btn>
    <b-collapse id="collapseAddBill">
      <div>
        <b-container fluid>
          <form @submit.prevent.self="addBill" class="billFormStyle w-50 p-3 mx-auto">
            <b-form-group>
              <b-row>
                <b-col sm="12 p-0">
                    <b-col sm="5 mx-auto">
                      <b-form-input :type="'text'" placeholder="Verizon" v-model="addBillObject.companyName" required></b-form-input>
                      <b-form-input :type="'text'" placeholder="Phone Bill" v-model="addBillObject.billName" required></b-form-input>
                      <b-form-input :type="'number'" placeholder="100" v-model="addBillObject.amountDue" required></b-form-input>                      <b-form-input :type="'date'" placeholder="Please enter Due Date" v-model="addBillObject.dueDate" required></b-form-input>
                    </b-col>
                </b-col>
              </b-row>
            </b-form-group>
            <b-button type="submit">Add Bill</b-button>
          </form>
        </b-container>
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
      addBillURL: "http://localhost:3000/bills/add/",
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
    }
  }
}
</script>

<style scoped>

</style>

