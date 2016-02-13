var express = require('express');
var router = express.Router();
var path = require('path');





var sum = function(x,y){
    var number = x + y;
    number = number.toString();
    return number;
};

var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number;
};

var multi = function(x,y){
    var number = x * y;
    number = number.toString();
    return number;
};

var divide = function(x,y){
    var number = x / y;
    number = number.toString();
    return number;
};


//if type:'' == 'sum'





exports.sum = sum;
exports.diff = diff;
exports.multi = multi;
exports.divide = divide;
module.exports = router;