var express = require('express');
var app = express();
var fs = require('fs');

app.use('/js', express.static('../dist-dev'));
app.use('/css', express.static('../css'));

app.get('/', function(req, res) {
  fs.readFile("html.html", function (err, content) {
    res.send(content.toString());
  });
});


var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
