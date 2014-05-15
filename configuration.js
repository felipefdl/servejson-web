/*jslint node:true*/
'use strict';

var format  = require('util').format;
var env     = process.env;
var configs = {
    "port"      : env.PORT       || 3002,
    "newrelic"  : env.NEWRELIC   || false,
    "api_server": env.API_SERVER || 'http://localhost:3001'
};

module.exports = configs;
