<template>
  <b-card>
    <b-container fluid>
      <form @submit.prevent.self="addBill">
        <div>
          <b-row>
            <b-col md="12 p-0">
              <b-col md="12 mx-auto">
                <b-form-group>
                  <b-form-input :type="'text'" placeholder="Company Name" v-model="addBillObject.companyName" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input :type="'text'" placeholder="Bill Name" v-model="addBillObject.billName" required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input :type="'number'" step="0.01" placeholder="Amount Due" min="1" v-model="addBillObject.amountDue"
                    required></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input :type="'number'" placeholder="Due Date" min="1" max="31" v-model="addBillObject.dueDate"
                    required></b-form-input>
                </b-form-group>
              </b-col>
            </b-col>
          </b-row>
        </div>
        <div class="mx-auto p-1 w-100">
          <div class="mx-auto">
            <b-button class="mx-auto" type="submit">Add Bill</b-button>
          </div>
        </div>
      </form>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: 'AddBillForm',
  props: ['userID'],
  data () {
    return {
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
      this.getUserID()
      .then(userID => this.$http.put(this.addBillURL+this.userID, this.addBillObject))
      .then(result => window.location.reload())
    },
    getUserID: function (auth = this.auth) {
      return new Promise(function(resolve, reject) {
        resolve(true)
      })
    },
    toggleAdd: function () {
      this.toggleAddButton = !this.toggleAddButton
    }
  }
}
</script>