const axios = require('axios');

const placeIn = (pl, doc) => {
                for (var spot of pl) {
                    if (spot.PlaceId == doc) {
                        return spot.Name;
                    }
                }
            };
            
const carrier = (airlines, hoc) => {
                for (var car of airlines) {
                    if (car.CarrierId == hoc) {
                        return car.Name;
                    }
                }
            };

const apiCall = (place, start, end, cost) => {
    return axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/GR/EUR/el-GR/SKG/${place}/${start}/${end}`, 
            {headers: {"X-RapidAPI-Key": "3254b376a1msh45ac1f4f4163697p1b13bbjsn5e28997c2358"}}).then((result) => {
        
        const res = result.data.Quotes;
        const place = result.data.Places;
        const carriersAll = result.data.Carriers;
        
        const arrayRes = res.map((item) => { 
            if (item.MinPrice <= cost) {
            const rObj = {};
            
            rObj.price = item.MinPrice;
            rObj.direct = item.Direct;
            rObj.originId =  placeIn(place, item.OutboundLeg.OriginId);
            rObj.destinationId = placeIn(place, item.InboundLeg.OriginId);
            rObj.departureDate = start;
            rObj.arrivalDate = end;
            rObj.originCarrier = carrier(carriersAll, item.OutboundLeg.CarrierIds[0]);
            rObj.destinationCarrier = carrier(carriersAll, item.InboundLeg.CarrierIds[0]);
            
            return rObj;
            } else {
                console.log(item.MinPrice);
            }
        });
        return arrayRes;
    }).catch((err) => {
        throw err;
    });
};

module.exports = {apiCall};