const { Game } = require('../models')

const getGamess = async (req, res) => {
  try {
    const games = await Game.find({})
    res.send(games)
  } catch (error) {
    console.log(error)
  }
}

const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.send(game)
  } catch (error) {
    console.log(error)
  }
}

const deleteGame = async (req, res) => {
  try {
    await Game.deleteOne({ _id: req.params.id })
  } catch (erroe) {}
}

module.exports = {
  getGamess,
  createGame
}
