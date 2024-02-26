const express = require('express')
const router = express.Router()
const ratingCtrl = require('../controller/rating')

// router.get('/game/:id/rating', ratingCtrl.getRatings)
router.post('/game/:id/rating', ratingCtrl.createRatings)

module.exports = router
