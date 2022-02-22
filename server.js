var express = require('express');
var app = express();
const path = require('path');
var db = require('./data/mongoose');

app.use(express.static('dist'));

// app.get('/', function (req, res) {
//   console.log('*** REQUEST: ', req);
//   res.send('Server is working');
// });

app.listen(3000, function () {
  console.log('Listening on 127.0.0.1:3000...');
});
