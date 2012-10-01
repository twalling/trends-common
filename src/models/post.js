var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('underscore');
var constants = require('../constants');

var Post = new Schema({
  type: {
    type: String,
    required: true,
    'enum': _.pluck(constants.POST_TYPES, 'type')
  },
  externalId: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  media: {
    type: String
  },
  date: {
    type: Date
  },
  name: {
    type: String,
    'default': 'Test'
  }
});

Post.statics.findMostRecent = function(callback) {
  return this.find().limit(20).sort('date', 'descending').exec(callback);
};

Post.statics.findByExternalIds = function(ids, callback) {
  return this.find().where('externalId').$in(ids).exec(callback);
};

module.exports.model = mongoose.model('Post', Post);
module.exports.schema = Post;
