const { Game } = require('../models')

const getGames = async (req, res) => {
  try {
    const games = await Game.find({}).populate('ratings')
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
    res.send({ msg: 'Post Deleted', status: 'Ok' })
  } catch (error) {
    console.log(error)
  }
}

const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body)
    res.send(game)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getGames,
  createGame,
  deleteGame,
  updateGame
}
