const express = require('express');
const app = express();
const PORT = 8000;

const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const {getFlights} = require('./partials/flight.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/html')));

app.get('/', (req, res) => {

const countries = ["THIR-sky", "BERL-sky", "PARI-sky"];

const st = '2019-06-10';
const en = '2019-06-20';
const price = 200;
const dur = 3;
    
getFlights(st, en, price, dur, countries).then((body) => {    
    res.send(body);
}).catch((err) => {
    res.sendStatus(404).send(err);
});
    
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));