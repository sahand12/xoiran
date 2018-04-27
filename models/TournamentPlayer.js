const mongoose = require('mongoose');

const tournamentPlayerSchemaOptions = {
  typeKey: '$type',
};
const tournamentPlayerSchema = new mongoose.Schema({
  tId: { // tournament id
    $type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
  },
  players: [{ // player id
    id: {
      $type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    jat: Date,
  }],
}, tournamentPlayerSchemaOptions);

module.exports = tournamentPlayerSchema;