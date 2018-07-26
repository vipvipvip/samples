var configFactory = require('./webpack.shared.config.js');

var config = configFactory('/bits2/');
config.devtool = 'source-map';

module.exports = config;