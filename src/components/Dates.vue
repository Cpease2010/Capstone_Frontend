<template>
<div>
  <input type="text">
  </div>
</template>

<script>
  import { Promise } from 'bluebird';
  import Months from '../HelperData/Months.json'
  let startDate,
      payDates = [],
      year,
      limit,
      dateOf={},
      months = Months;
  export default {
    name: 'Dates',
    data(){
      return {
        payDates,
        limit,
        startDate,
        year,
        months
      }
    },
    methods: {
      getDates: function () {
        return new Promise(function(resolve, reject) {
        let d = new Date(),
            date = {month: d.getMonth(), day: d.getDate(), year: d.getFullYear()}
          resolve(date)
        })
      },
      setDate(date){
        (date.year % 4 === 0) ? months["2"].days = 29 : false;
        this.limit = months[date.month].days
        this.startDate = 7
        this.year = date.year
        return date
      },
      calculatePayDates(date){
        let month = date.month,
            limits = [];
        for (let i = 0; i < 12; i++) {
          let limit = months[month].days,
          carryover = limit + 14;
          limits.push(carryover);
          console.log(months[month].name,months[month].days,limit)
          month++
          month = (month > 12) ? 1 : month;
        }
        console.log(limits)
      }
    },
    computed: {
      something(){
      }
    },
    mounted() {
      this.getDates()
        .then(date => this.setDate(date))
        .then(date => this.calculatePayDates(date))
    },
  }
</script>
