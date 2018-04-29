const mongoose = require('mongoose');
const {Mixed} = mongoose.Schema.Types;

const gameSchema = new mongoose.Schema({
  name: String,
  possibleNumberOfPlayers: [{
    $type: Number,
  }],
  properties: [{
    key: String,
    value: Mixed,
  }],
  categories: [String],
  family: String,
  t: {
    fa: {
      name: String,
      properties: [{
        key: String,
        values: Mixed,
      }],
    },
  },
}, {timestamps: true});

module.exports = gameSchema;