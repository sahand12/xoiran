const {ObjectId} = require('mongoose').Types;

class User {
  constructor({nickname}) {
    this._id = ObjectId();
    this._nickname = nickname;
  }

  get nickname() {
    return this._nickname;
  }

  set nickname(val) {
    this._nickname = val;
  }

  toObject() {
    return {
      id: this._id,
      nickname: this.nickname,
    };
  }

  toJSON() {
    return JSON.stringify(this.toObject());
  }

  toString() {
    return this.toJSON();
  }

}

const sahand = new User({nickname: 'sahand'});
console.log(sahand);

module.exports = User;