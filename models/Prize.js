const mongoose = require('mongoose');

const prizeSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};

const prizeSchema = new mongoose.Schema({
  title: String,
  type: {
    $type: String,
    enum: ['cash', 'credit', 'other'],
  },
  description: String,
  value: {
    amount: Number,
    currency: {
      $type: String,
      enum: ['IRR', 'IRT', 'USD', 'EUR'],
    },
    precision: Number,
  },
  isMonetary: Boolean,
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  t: {
    fa: {
      description: String,
      title: String,
    },
  },
}, prizeSchemaOptions);

module.exports = prizeSchema;