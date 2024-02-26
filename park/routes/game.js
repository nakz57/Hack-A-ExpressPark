const express = require('express')
const router = express.Router()

const gameCtrl = require('../controller/game')

router.get('/', gameCtrl.getGamess)
router.post('/add', gameCtrl.createGame)
router.delete('/:id', gameCtrl.deleteGame)

module.exports = router
