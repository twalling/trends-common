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
    type: String,
    required: true
  },
  media: {
    type: String
  },
  date: {
		type: Date,
		required: true
  }
});

Post.statics.findMostRecent = function(callback) {
  return this.find().exec(callback);
};

module.exports.model = mongoose.model('Post', Post);
module.exports.schema = Post;
