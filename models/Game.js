const mongoose = require('mongoose');
const {Mixed, ObjectId} = mongoose.Schema.Types;

const gameSchemaOptions = {
  timestamps: true,
  typeKey: '$type',
};
const gameSchema = new mongoose.Schema({
  name: String,
  createdBy: {
    $type: ObjectId,
    ref: 'User',
  },
  possibleNumberOfPlayers: [{
    $type: Number,
  }],
  properties: [{
    key: String,
    value: Mixed,
  }],
  categories: [String],
  // family: String,
  t: {
    fa: {
      name: String,
      properties: [{
        key: String,
        values: Mixed,
      }],
    },
  },
}, gameSchemaOptions);

module.exports = gameSchema;
