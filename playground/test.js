const fs = require('fs');

const placeObj = () => {
    
    const dataJson = fs.readFileSync('../public/js/places.json', 'utf-8');
    const jsonToObj = JSON.parse(dataJson);
    return jsonToObj;

    
};

placeObj();