var express = require('express');
var router = express.Router();
var path = require('path');


var multi = function(x,y){
    var number = x * y;
    number = number.toString();
    return number;
};

exports.multi = multi;
module.exports = router;