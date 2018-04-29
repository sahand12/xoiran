const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const tournamentSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const tournamentSchema = new mongoose.Schema({
  name: String,
  description: String,
  state: {
    $type: String,
    enum: ['cancelled', 'scheduled', 'started', 'finished'],
    default: 'scheduled',
  },
  approximateStartTime: Date,
  duration: {
    m: Number,
    d: Number,
    h: Number,
  },
  currentPhase: {
    $type: String,
    enum: ['initial', 'group', '1/2', '1/4', '1/8', '1/16', '1/32', '1/64'],
  },
  currentPhaseRound: Number,
  type: {
    $type: String,
    enum: ['League', 'single elimination', 'double elimination', 'round robin', 'multi type'],
  },
  games: [{
    $type: ObjectId,
    ref: 'Game',
  }],
  organizers: [{
    $type: ObjectId,
    ref: 'User',
  }],
  supervisor: {
    $type: ObjectId,
    ref: 'User',
  },
  sponsors: [{
    $type: ObjectId,
    ref: 'User',
  }],
  scheduleId: {
    $type: ObjectId,
    ref: 'Schedule',
  },
  rules: {
    $type: ObjectId,
    ref: 'TournamentRule',
  },
  t: {
    fa: {
      name: String,
      description: String,
    }
  }
}, tournamentSchemaOptions);

module.exports = tournamentSchema;