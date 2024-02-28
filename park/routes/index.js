var express = require('express')
var router = express.Router()
const gameCtrl = require('../controller/game')

/* GET home page. */
router.get('/', gameCtrl.getGames)

module.exports = router
