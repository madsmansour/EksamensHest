var express = require('express');
var router = express.Router();
const hest = require('../models').Hest;

/* post new hest. */
router.post('/hest', function(req, res, next) {
  console.log(req['body'])
  hest.create(req['body'])
  res.send("Data indsat");
});

/* update existing hest. */
router.put('/hest/:id', function(req, res, next) {
  hest.update(
    req.body,
    {where:{id:req.params.id}});
  res.send("Data ændret");
});

/* delete hest. */
router.delete('/hest/:id', function(req, res, next) {
  hest.destroy(
    {returning:true, where:{id:req.params.id}});
  res.send("Data slettet");
});

/* GET all hests. */
router.get('/hest', async function(req, res, next) {
  var result = await hest.findAll();
res.json(result);
});

/* GET hest by ID. */
router.get('/hest/:id', async function(req, res, next) {
  var result = await hest.findByPk(req.params.id);
res.json(result);
});

module.exports = router;