var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/reg', function(req, res, next) {
  res.send('111111');
});

module.exports = router;
