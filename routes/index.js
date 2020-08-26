var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});

router.get('/home/goods', function(req, res, next) {
  //res.render('index', { title: 'API' });
  res.send("111111")
});


module.exports = router;
