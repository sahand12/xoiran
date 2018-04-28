const mongoose = require('mongoose');

const matchSetSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};
const matchSetSchema = new mongoose.Schema({
  round: Number,
  matchId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
  },
  scoreSheet: [{
    player: {
      $type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    score: Number,
  }],
  isATie: Boolean,
  winner: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, matchSetSchemaOptions);

module.exports = matchSetSchema;