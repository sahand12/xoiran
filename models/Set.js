const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
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
}, {typeKey: '$type', timestamps: true});

module.exports = setSchema;