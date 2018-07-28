var configFactory = require('./webpack.shared.config.js');

var config = configFactory('/cc/');
config.devtool = 'source-map';

module.exports = config;