const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let scoreboardSchema = mongoose.Schema({
  user: String,
  score: Number
});

let ScoreBoard = mongoose.model('ScoreBoard', scoreboardSchema);

let addScore = (obj) => {
  var newRecord = new ScoreBoard(obj);
  return newRecord.save();
};

let getScore = () => {
  return ScoreBoard.find({}).sort('-score');
}

module.exports.add = addScore;
module.exports.getScore = getScore;