const mongoose = require('mongoose');
const Airport = require('./airport-model.js');

const airportSchema = mongoose.Schema({
  airport_identifier: String,
  airport_name: String,
  available_runways: Number
})

const Airports = mongoose.model('Airport', airportSchema);

module.exports = Airports;
