const { Game, Rating } = require('../models')

const createRatings = async (req, res) => {
  try {
    const newRating = await Rating.create(req.body)
    const game = await Game.findById(req.params.id)
    game.ratings.push(newRating._id)
    await game.save().populate('ratings')
    res.send( game)
    console.log(newRating, game)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  createRatings
}
