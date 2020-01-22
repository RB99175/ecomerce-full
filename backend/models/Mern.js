
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
// creating the model using name, price and url
const Mern = new Schema({
  name: String,
  price: String,
  url: String
})

module.exports = mongoose.model('Mern', Mern) 