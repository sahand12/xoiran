const {ObjectId} = require('mongoose').Types;

class Prize {
  constructor({title, titleFa, desc, descFa, type, value, tournamentId, rank}) {
    Object.assign(this, {
      _id: ObjectId(),
      title,
      type,
      description: desc,
      isMonetary: typeof value !== 'undefined',
      tournamentId,
      value,
      rank,
      t: {
        fa: {
          title: titleFa,
          description: descFa,
        },
      },
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }
  
  toObject() {
    const {_id, title, type, description, isMonetary, tournamentId, value, rank, t, createdAt, updatedAt} = this;
    return {_id, title, type, description, isMonetary, tournamentId, value, rank, t, createdAt, updatedAt};
  }
  
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  
  toString() {
    return this.toJSON();
  }
}

module.exports = Prize;