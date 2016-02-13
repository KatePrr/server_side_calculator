var express = require('express');
var router = express.Router();
var path = require('path');

var divide = function(x,y){
    var number = x / y;
    number = number.toString();
    return number;
};

exports.divide = divide;
module.exports = router;