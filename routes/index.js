var express = require('express');
var router = express.Router();
var data = require('../data/mhs.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(
    { message: "Welcome Dinar API" }
  );
});

router.get('/mahasiswa', function (req, res, next) {
  res.status(200).send(data)
});

module.exports = router;
