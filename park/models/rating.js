const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({
  rating: Number,
  content: String
})

module.exports = ratingSchema
