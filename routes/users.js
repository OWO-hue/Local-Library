var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:ID', function(req, res, next) {
  res.render('test',{ ID : 'cool'});
});



module.exports = router;
