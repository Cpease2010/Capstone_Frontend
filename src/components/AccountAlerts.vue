<template>
  <div>
    <b-alert show variant="primary">
      You have ${{this.total}} in bills.
    </b-alert>
    <b-alert show variant="primary">
      Made up of {{this.accountInfo.length}} bills.
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'AccountAlert',
  props: ['total','accountInfo']
}
</script>