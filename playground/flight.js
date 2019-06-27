const axios = require('axios');
const arraySort = require('array-sort');

const {datesRange} = require('./time.js');

/*
const testArray = [
    {start: '2019-07-01', end: '2019-07-04'}, 
    {start: '2019-07-08', end: '2019-07-11'},
    {start: '2019-07-20', end: '2019-07-23'}
]

const price = 140;
*/
const st = '2019-06-10';
const en = '2019-06-20';
const price = 200;
const dur = 3;

//-- User Inputs --//


//---------------//

const getFlights = async (start, end, cost, duration) => {
    
    const arrayDates = datesRange(start, end, duration);
    
    arrayDates.forEach(async (date) => {
        
        
    });
    
      const call = await axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/GR/EUR/el-GR/SKG/ATH/${start}/${end}`, 
            {headers: {"X-RapidAPI-Key": "3254b376a1msh45ac1f4f4163697p1b13bbjsn5e28997c2358"}});
     
      const filteredCall = call.data.Quotes.filter((item)=> {
         return item.MinPrice <= cost;
      });
    
  return filteredCall;
};

getFlights(st, en, price, dur);


module.exports = {
    getFlights
};