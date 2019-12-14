var express = require('express');
var router = express.Router();
const hest = require('../models').Hest;

/* GET home page. */
router.get('/', async function(req, res, next) {
    var result = await hest.findAll();
  res.json(result);
});

module.exports = router;