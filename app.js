var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./routes/data');
//var math = require('./routes/math');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/data', data);
app.use('/add', data);
app.use('/subtract', data);
app.use('/multiply', data);
app.use('/divide', data);


app.get('/*', function(req, res) {
    console.log('Here is the request: ', req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});


app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});