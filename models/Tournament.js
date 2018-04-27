const mongoose = require('mongoose');

const tournamentSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const tournamentSchema = new mongoose.Schema({
  name: String,
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
    ref: 'User',
  },
  rules: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'TournamentRule',
  },
}, tournamentSchemaOptions);

module.exports = tournamentSchema;