var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'tmp/' });

var port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.post('/get-file-size', upload.single('file'), function (req, res) {
   var response = {};
   console.log(req.file.originalname);
   console.log(req.file.size);
   response.size = req.file.size;
   res.send(response);
});

app.listen(port, function() {
   console.log('Now listening on port ' + port);
});
