<template>
  <div>
    <b-alert show variant="primary">
      <h5>You have <b>{{this.accountInfo.length}} bills</b> totaling: </h5><b><span style="font-size: 3em;">${{this.total}}</span></b>
    <Dates></Dates>   
    </b-alert>
  </div>
</template>

<script>
import Dates from './Dates'
export default {
  name: 'AccountAlert',
  components: {
    Dates
  },
  props: ['total','accountInfo'],
  methods: {
  
  }
}
</script>