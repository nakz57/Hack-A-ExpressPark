const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rating = new Schema({
  rating: Number,
  content: Srting
})

module.exports = mongoose.model('Rating', rating)
