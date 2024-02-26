const express = require('express')
const router = express.Router()

const gameCtrl = require('../controller/game')

router.get('/', gameCtrl.getGames)
router.post('/add', gameCtrl.createGame)
router.delete('/:id', gameCtrl.deleteGame)
router.put('/:id', gameCtrl.updateGame)

module.exports = router
