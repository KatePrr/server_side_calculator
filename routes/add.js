var express = require('express');
var router = express.Router();
var path = require('path');





var sum = function(x,y){
    var number = x + y;
    number = number.toString();
    return number;
};

exports.sum = sum;
module.exports = router;