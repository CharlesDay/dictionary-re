var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.send('Testing the connection');
});

module.exports = router;
