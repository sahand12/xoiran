const mongoose = require('mongoose');

const tournamentPhaseSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const tournamentPhaseSchema = new mongoose.Schema({
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  type: {
    $type: String,
    enum: ['1/64', '1/32', '1/16', '1/8', '1/4', '1/2', 'final', 'group', 'initial'],
  },
  round: Number,
  scheduleId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
  }
}, tournamentPhaseSchemaOptions);

module.exports = tournamentPhaseSchema;