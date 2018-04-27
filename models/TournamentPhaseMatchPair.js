const mongoose = require('mongoose');

const tournamentPhaseMatchPairSchemaOptions = {
  typeKey: '$type',
  timestamps: true,
};
const tournamentPhaseMatchPairSchema = new mongoose.Schema({
  tournamentId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  tournamentPhaseId: {
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'TournamentPhase',
  },
  matches: [{
    matchId: {
      $type: mongoose.Schema.Types.ObjectId,
      ref: 'Match',
    },
    players: {
      $type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    createdAt: {
      $type: Date,
      default: Date.now,
    }
  }],
}, tournamentPhaseMatchPairSchemaOptions);

module.exports = tournamentPhaseMatchPairSchema;