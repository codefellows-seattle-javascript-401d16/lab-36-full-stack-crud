'use strict';

const mongoose = require('mongoose');
const Team = require('./team.js');

const playerSchema = mongoose.Schema({
  name: {type: String, require: true},
  age: {type: Number},
  position: {type: String},
  team: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'team'},
});

playerSchema.pre('save', function(next){
  console.log('pre save doc', this);
  Team.findById(this.team)
    .then(team => {
      let playerIDSet = new Set(team.players);
      playerIDSet.add(this._id);
      team.players = Array.from(playerIDSet);
      return team.save();
    })
    .then(() => next())
    .catch(() =>
      next(new Error('validation failed, not team for player')));
});

playerSchema.post('remove', function(doc, next){
  console.log('post remove doc', doc);
  Team.findById(doc.team)
    .then(team => {
      team.players = team.players.filter(player => player._id !== doc._id);
      return team.save();
    })
    .then(() => next())
    .catch(next);
});

module.exports = mongoose.model('player', playerSchema);
