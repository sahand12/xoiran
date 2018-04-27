const mongoose = require('mongoose');

const scheduleSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};

const schedule = new mongoose.Schema({
  scheduleType: {
    $type: String,
    enum: ['tournament', 'tournamentPhase', 'match'],
  },

  ownerId: {
    $type: mongoose.Schema.Types.ObjectId,
  },

  hasRegistration: Boolean,
  registrationStart: Date,
  registrationEnd: Date,

  scheduledDate: Date,
  startDate: Date,
  endDate: Date,
}, scheduleSchemaOptions);

module.exports = schedule;