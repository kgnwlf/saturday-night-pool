const mongoose = require('mongoose');
const config = require('../config.js');


const players = new mongoose.Schema({
  name: String,
  wins: Number,
  losses: Number,
  ratio: Number
});

const games = new mongoose.Schema({
  winner: String,
  loser: String,
  timestamp: {type: Date, default: Date.now}
});

const player = mongoose.model('player', players);
const game = mongoose.model('game', games);


async function main() {

  const conn = await mongoose.connect(config.ATLASDB);

  var returnData = {
    players: [],
    games: []
  }

  return player.find({}).sort('-ratio')
  .then(players => {
    returnData.players = players;
    return returnData;
  })
  .then((returnData) => {
    return game.find({}).sort('-timestamp')
    .then((games) => {
      returnData.games = games;
      return returnData;
    })
  })
}

async function createGame(players) {
  const conn = await mongoose.connect(config.ATLASDB);
  const newGame = new game ({
    winner: players.winner.name,
    loser: players.loser.name
  });
  await newGame.save();
}

async function updatePlayers(players) {
  const conn = await mongoose.connect(config.ATLASDB);

  await player.updateOne({ name: players.winner.name}, {
    wins: players.winner.wins,
    ratio: players.winner.ratio
  });

  await player.updateOne({ name: players.loser.name}, {
    losses: players.loser.losses,
    ratio: players.loser.ratio
  });

}

// main().catch(err => console.log(err));

module.exports.mongoosedb = {main, createGame, updatePlayers};

// const test1 = new player ({name: 'test', win: 0, loses: 0, ratio: 0});
// await test1.save();
// console.log(test1.name);
// const gtest1 = new game ({winner: 'test', loser: 'test2'});
// await gtest1.save();
// console.log(gtest1.name);
