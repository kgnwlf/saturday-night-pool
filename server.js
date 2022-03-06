var express = require('express');
var app = express();
const path = require('path');
var db = require('./data/mongoose');
app.use(express.json());
app.use(express.static('dist'));

app.get('/all', (req, res) => {

  db.mongoosedb.main()
  .then((returnData) => {
    res.send(returnData);
  })
})

app.post('/finish', (req, res) => {
  console.log('*** REQUEST:', req.body);
  db.mongoosedb.createGame(req.body);
  db.mongoosedb.updatePlayers(req.body);
  res.end();
})

app.listen(3000, function () {
  console.log('Listening on 127.0.0.1:3000...');
});