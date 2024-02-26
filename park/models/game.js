const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  ratings: { type: Schema.Types.ObjectId, ref: 'rating' }
})

module.exports = gameSchema
