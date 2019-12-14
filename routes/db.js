var express = require('express');
var router = express.Router();
const hest = require('../models').Hest;

/* GET home page. */
router.get('/', async function(req, res, next) {
    

    // koble på db
    // sende en query
    // modtage et objekt
    // vise objektet i templaten
    res.render("db", {
        title: "db",
        hests: await hest.findAll()
    });
});

module.exports = router;