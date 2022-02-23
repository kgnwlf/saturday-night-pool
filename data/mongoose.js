const mongoose = require('mongoose');


const players = new mongoose.Schema({
  name: String,
  win: Number,
  loses: Number,
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

  const conn = await mongoose.connect(window.ATLASDB);

 /*
 get all players from atlas
 get all games from atlas
 */
}

// update scores function

// create game function

main().catch(err => console.log(err));

module.exports.db = main;

// const test1 = new player ({name: 'test', win: 0, loses: 0, ratio: 0});
// await test1.save();
// console.log(test1.name);
// const gtest1 = new game ({winner: 'test', loser: 'test2'});
// await gtest1.save();
// console.log(gtest1.name);