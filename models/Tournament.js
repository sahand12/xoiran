const mongoose = require('mongoose');

const tournamentSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const tournamentSchema = new mongoose.Schema({
  name: String,
  description: String,
  t: {
    fa: {
      name: String,
      description: String,
    }
  },
  organizers: [{
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  sponsors: [{
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  scheduleId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
  },
  rules: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'TournamentRule',
  },
}, tournamentSchemaOptions);

module.exports = tournamentSchema;