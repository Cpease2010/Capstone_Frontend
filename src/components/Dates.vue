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
        this.startDate = date.day
        this.year = date.year
        return date
      },
      calculatePayDates(date){
        //check that payDay is based on user input and not date variable
        let month = 12,
            payDates = (payDay, limits, month, payDates = []) => {
                  limit = limits[1];
              for (let j = 0; j < limits.length; j++) {
                
              console.log(month);
              
              
              month = (payDay > limit) ? month+=1 : month;
              console.log('last',month)
              payDay = (payDay > limit) ? payDay % limit : payDay;
              // console.log('payDay After', payDay)
              limit=limits[month]
              month = (month >= 12) ? 1 : month;
              // console.log(payDates)
              payDates.push({'payDay': payDay, 'limit': limit, 'month': month})
              payDay += 14
              //add 14 for payDay
              //payDay = ;
              //limit = limits
              //push startDate into payDates
              // //
              // console.log(limit)
              }
              return payDates
            },
            limits = (month, limitsArr = []) => {
              for (let i = 0; i < 12; i++) {
                let limit = months[month].days,
                    carryover = limit + 14;
                limitsArr.push(limit);
                month++
                month = (month > 12) ? 1 : month;
              }
              return limitsArr
            };  
            
        payDates(this.startDate, limits(month), month)
        // console.log(limits(month))
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
