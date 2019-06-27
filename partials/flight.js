const axios = require('axios');
const arraySort = require('array-sort');

const {datesRange} = require('./time.js');
const {apiCall} = require('./axios.js')

const countries = ["JTR-sky", "BERL-sky", "PARI-sky"];

const st = '2019-06-10';
const en = '2019-06-20';
const price = 200;
const dur = 3;

//-- User Inputs --//


//---------------//

const getFlights = async (start, end, cost, duration, destination) => {
    
    let dataObj = [];
    
   const arrayDates = datesRange(start, end, duration);
    
 for (let i = 0; i <= (destination.length -1); i++) {
    await Promise.all(arrayDates.map(async date => {
        const middle = await apiCall(destination[i], date.start, date.end, price);
        dataObj.push(middle);
     }));
 }
 
        
/*      const filteredCall = call.data.Quotes.filter((item)=> {
         return item.MinPrice <= cost;
      });
    */
   return dataObj;
};

/*getFlights(st, en, price, dur, countries).then((data) => {
    console.log(data);
});*/
/*
const RarrayResult = arrayResult.map((item) => {
            const rObj = {};
            rObj.price = item.MinPrice;
            rObj.direct = item.Direct;
            rObj.originId = item.OutboundLeg.OriginId;
            rObj.destinationId = item.OutboundLeg.DestinationId;
            rObj.departureDate = start;
            rObj.arrivalDate = end;
            rObj.originCarrier = item.OutboundLeg.CarrierIds[0];
            rObj.destinationCarrier = item.InboundLeg.CarrierIds[0];
         return RarrayResult;
        });
*/

module.exports = {
    getFlights
};