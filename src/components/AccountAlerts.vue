<template>
  <div>
    <b-alert show variant="primary">
      You have <b>${{this.total}}</b> in bills.
    </b-alert>
    <b-alert show variant="primary">
      Made up of <b>{{this.accountInfo.length}}</b> bills.
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'AccountAlert',
  props: ['total','accountInfo']
}
</script>