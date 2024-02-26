const { Game } = require('../models')

const getGamess = async (req, res) => {
  try {
    const games = await Game.find({})
    res.send(games)
  } catch (error) {
    console.log(error)
  }
}

const createGame = async () => {
  try {
  } catch (error) {}
}

module.exports = {
  getGamess,
  createGame
}
