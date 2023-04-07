var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vehicle', { title: 'Search Results Vehicle' });
});

module.exports = router;