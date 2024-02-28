const express = require('express')
const router = express.Router()
const middleware = require('../middleware')

const gameCtrl = require('../controller/game')

router.get('/', gameCtrl.getGames)
router.get('/:id', gameCtrl.getGame)

router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  gameCtrl.createGame
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  gameCtrl.deleteGame
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  gameCtrl.updateGame
)

module.exports = router
