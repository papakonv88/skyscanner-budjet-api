const moment = require('moment');

const datesRange = (depDate, retDate, duration) => {
    
const startingMoment = moment(depDate);
const endingMoment = moment(retDate).subtract(duration, 'days');
const toMoment = moment(depDate).add(duration, 'days');
 
const arrayAll = [];

while (startingMoment <= endingMoment) {
       let datesObj = {};
       datesObj.start = startingMoment.clone().format('YYYY-MM-DD');
       datesObj.end= toMoment.clone().format('YYYY-MM-DD') ;
       arrayAll.push(datesObj);
       startingMoment.add(1, 'days');
       toMoment.add(1,'days');
       }
    
return arrayAll;
    
};


module.exports = {
    datesRange
};

