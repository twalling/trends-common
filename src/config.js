var _ = require('underscore');
var env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		mongodb: {
      host: '127.0.0.1',
      database: 'trends_dev'
    },
		instagram: {
			clientId: '',
			clientSecret: ''
		},
		twitter: {
			consumerKey: '',
			consumerSecret: '',
			accessTokenKey: '',
			accessTokenSecret: ''
		}
	}
};

var checkEnvVariables = function(service) {
	console.log('checking environment variables for ' + service);
	_.each(config[env][service], function(value, key) {
		var name = service.toUpperCase() + '_' + key.toUpperCase();
		if (process.env[name]) {
			console.log('found environment variable for ' + name + ', overriding config value');
			config[env][service][key] = process.env[name];
		}
	});
};

checkEnvVariables('instagram');
checkEnvVariables('twitter');

module.exports = config;