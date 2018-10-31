<template>
  <div>
    <b-alert show variant="primary">
      <h5>You have <b>{{this.accountInfo.length}} bills</b> totaling: </h5><b><span style="font-size: 3em;">${{this.total}}</span></b>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'AccountAlert',
  props: ['total','accountInfo'],
  methods: {
    // sevenDayBills: function (bills) {
    //   bills.filter(bill => {
    //     if (bill.dueDate) {
          
    //     } else {
          
    //     }
    //   })
    // }
  }
}
</script>