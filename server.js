var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

var port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.listen(port, function() {
   console.log('Now listening on port ' + port);
});
