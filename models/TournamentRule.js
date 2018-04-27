const mongoose = require('mongoose');

const tournamentRuleSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const tournamentRuleSchema = new mongoose.Schema({
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  registrationFee: {
    amount: Number,
    currency: {
      $type: String,
      enum: ['IRR', 'IRT'],
    },
    precision: Number,
  },
  prizeTable: [{
    rank: Number,
    prizeId: {
      $type: mongoose.Schema.Types.ObjectId,
      ref: 'Prize',
    },
  }]
}, tournamentRuleSchemaOptions);

module.exports = tournamentRuleSchema;