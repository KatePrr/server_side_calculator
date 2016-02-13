var express = require('express');
var router = express.Router();
var path = require('path');


var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number;
};

exports.diff = diff;
module.exports = router;