const mongoose = require('mongoose')
const gameSchema = require('./Game')
const ratingSchema = require('./Rating')

const Game = mongoose.model('Game', gameSchema)
const Rating = mongoose.model('Rating', ratingSchema)

module.exports = {
  Game,
  Rating
}
