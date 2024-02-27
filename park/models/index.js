const mongoose = require('mongoose')
const gameSchema = require('./game')
const ratingSchema = require('./rating')
const userSchema = require('./user')

const Game = mongoose.model('Game', gameSchema)
const Rating = mongoose.model('Rating', ratingSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Game,
  Rating,
  User
}
