var express = require('express');
var router = express.Router();
var path = require('path');
var number;


router.post('/', function(req, res) {

    var x = parseInt(req.body.x);  //reference incoming object request body property: x
    var y = parseInt(req.body.y);
    number = x + y;
    number = number.toString();
    //console.log(req.body.sum);
    res.send(number);
    //console.log(req.body.x);
});

module.exports = router;