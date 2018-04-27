const mongoose = require('mongoose');

const prizeSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};

const prizeSchema = new mongoose.Schema({
  type: {
    $type: String,
    enum: ['cash', 'credit', 'other'],
  },
  description: String,
  amount: {
    value: Number,
    currency: {
      $type: String,
      enum: ['IRR', 'IRT'],
    },
    precision: Number,
  },
  isMonetary: Boolean,
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
}, prizeSchemaOptions);

module.exports = prizeSchema;