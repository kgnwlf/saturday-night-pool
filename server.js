var express = require('express');
var app = express();
const path = require('path');
var db = require('./data/mongoose');

app.use(express.static('dist'));


// get request on succ load
// call main

// on name click to finish game
// call update players
// call create game

app.listen(3000, function () {
  console.log('Listening on 127.0.0.1:3000...');
});

// app.get('/', function (req, res) {
//   console.log('*** REQUEST: ', req);
//   res.send('Server is working');
// });