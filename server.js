var express = require('express');
var app = express();
const path = require('path');
var db = require('./data/mongoose');
app.use(express.json());
app.use(express.static('dist'));

app.get('/all', (req, res) => {
  db.mongoosedb.main()
  .then((returnData) => {
    console.log('*** RETURN DATA', returnData);
  })
})

app.post('/finish', (req, res) => {
  // req.players {winner: sodfn, loser: skdfbhhs}
  console.log('*** REQUEST:', req.body);
  db.mongoosedb.createGame(req.body);
  db.mongoosedb.updatePlayers(req.body);
  res.end();
})
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