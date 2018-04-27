const mongoose = require('mongoose');

const matchSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};

const matchSchema = new mongoose.Schema({
  gameId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  },
  playerIds: [{
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  tournamentPhaseId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  setIds: [{
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Set',
  }],
  setRounds: Number,
  scheduledTime: Date,
  startTime: Date,
  endTime: Date,

  state: {
    $type: String,
    enum: ['scheduled', 'cancelled', 'playing', 'finished'],
    default: 'scheduled',
  }
}, matchSchemaOptions);

module.exports = matchSchema;