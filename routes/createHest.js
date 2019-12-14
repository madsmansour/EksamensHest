var express = require('express');
var router = express.Router();
const hest = require('../models').Hest;
const faker = require('faker');

/* GET users listing. */
router.get('/', function(req, res, next) {

const navn = faker.name.firstName();
const race = faker.name.firstName();
const alder = faker.random.number();
const alive = faker.random.boolean();

const body = {
  navn: navn,
  race: race,
  alder: alder,
  alive: alive,
};


hest.create(body);

//find the user



//destroy the user with the object, this will call DELETE where id = our_user_id automatically.

  res.send('Dummy data created');
});

module.exports = router;