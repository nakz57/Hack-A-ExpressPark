const mongoose = require('mongoose')
const gameSchema = require('./game')
const ratingSchema = require('./rating')

const Game = mongoose.model('Game', gameSchema)
const Rating = mongoose.model('Rating', ratingSchema)

module.exports = {
  Game,
  Rating
}
