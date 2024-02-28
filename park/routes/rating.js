const express = require('express')
const router = express.Router()
const ratingCtrl = require('../controller/rating')
const middleware = require('../middleware')

router.post(
  '/game/:id/rating',
  middleware.stripToken,
  middleware.verifyToken,
  ratingCtrl.createRatings
)

module.exports = router
