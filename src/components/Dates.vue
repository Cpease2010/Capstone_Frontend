<template>
<div>
  <ul v-for="(month, i) in payDates" :key="i">{{`${i}:  ${month}`}}
    <!-- <li v-for="(day, i) in month" :key="i">{{day}}</li> -->
    
  </ul>
  </div>
</template>

<script>
  import { Promise } from 'bluebird';
  import Months from '../HelperData/Months.json';

  let date,
      limit,
      months = Months,
      payDates = {},
      payDay,
      year;

  export default {
    
    name: 'Dates',
    data(){
      return {
        date,
        limit,
        months,
        payDates,
        payDay,
        year
      }
    },
    methods: {
      getDates: function () {
        return new Promise(function(resolve, reject) {
        let d = new Date(),
            date = {month: 12, day: d.getDate(), year: d.getFullYear()};
          resolve(date)
        })
      },
      setDate(date){
        (date.year % 4 === 0) ? months["2"].days = 29 : false;
        this.date = date
        this.limit = months[date.month-1].days
        console.log('setdate', this.limit)
        this.payDay = date.day
        this.year = date.year
        return date
      },
      calculatePayDates(date){
        //check that payDay is based on user input and not date variable
        let month = months[11],        
        
        //function used
        payDates = (payDay, limitsArr, month, payDates = {}) => {
          let i = 0,
          limit = limitsArr[0];
          console.log('limitsArr', limitsArr)
            let monthNumber = month.number;
          for (let j = 0; j < limitsArr.length; j++) {
            if (payDay > limit) {
              payDay = payDay % limit;
              monthNumber = month.number +1;
              month = (monthNumber > 11) ? this.months[0] : this.months[monthNumber];
              (!payDates[month.name]) ? payDates[month.name] = [payDay] : payDates[month.name].push(payDay);
              limit = limitsArr[++i];
            } else {
              (!payDates[month.name]) ? payDates[month.name] = [payDay] : payDates[month.name].push(payDay);
            }
            console.log('payDay',payDay,"limit",limit,'month',month.name)
              payDay += 14
          };
        
            // console.log('paydate', payDates.forEach(months => month.name))

          return payDates
      },
        //function to build an array of how many days are in a month
      limitsArr = (month, limitsArr = []) => {
        let monthNumber = month.number;
        for (let i = 0; i < 24; i++) {
          let limit = month.days;
          limitsArr.push(limit);
          monthNumber = month.number + 1;
          month = (monthNumber > 11) ? this.months[0] : this.months[monthNumber];
          // month = this.months[month.number++]
        }
        return limitsArr;
      }
      console.log(this.payDay)
      this.payDates = payDates(7, limitsArr(month), month);

      }
    },
    mounted() {
      this.getDates()
        .then(date => this.setDate(date))
        .then(date => this.calculatePayDates(date))
        // .then(nothing => )
    },
  }
</script>
