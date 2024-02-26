const express = require('express')
const router = express.Router()
const ratingCtrl = require('../controller/rating')

router.post('/game/:id/rating', ratingCtrl.createRatings)

module.exports = router
