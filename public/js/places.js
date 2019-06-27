const fs = require('fs');

const placeObj = () => {
    
    const dataJson = fs.readFileSync('places.json', 'utf-8');
    const jsonToObj = JSON.parse(dataJson);
    const arrayPlaces = [];
    
    jsonToObj.Continents.map((item) => {
      item.Countries.map((itemCont) => {
       itemCont.Cities.map((dataf) => {
           let cityObj = {};
           cityObj.city = dataf.Name;
           dataf.Airports.map((airpf) => {
              cityObj.airportId = airpf.CityId.concat("-sky");
              cityObj.airport = airpf.Name;
           });
           arrayPlaces.push(cityObj);
       });  
      });
    });
    
console.log(JSON.stringify(arrayPlaces, null, 2));
    
    fs.writeFileSync('tesstttt.json', JSON.stringify(arrayPlaces, null, 2),function(err) {
    if (err) throw err;
});
    
    return arrayPlaces;   
};

placeObj();