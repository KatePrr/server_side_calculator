var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/', function(req, res) {

    var x = parseInt(req.body.x);
    var y = parseInt(req.body.y);
    number = x - y;
    number = number.toString();

    res.send(number);
});


module.exports = router;