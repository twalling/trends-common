var mongoose = require('mongoose');

module.exports.connectToMongo = function(config, callback) {
  console.log('Connecting', config.uri);
  mongoose.connect(config.uri, callback);
};