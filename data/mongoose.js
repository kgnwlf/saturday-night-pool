const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://saturdaypool:Keegansmells123@cluster0.u9jaj.mongodb.net/Cluster0?retryWrites=true&w=majority');

}

module.exports.db = main();