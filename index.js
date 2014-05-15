/*jslint node:true, unparam:true, nomen: true*/
'use strict';

var express = require('express');
var util    = require('util');
var config  = require('./configuration.js');
var app     = express();


// Views and public files config
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/dist'));

// Express config
app.set('port', config.port);
app.disable('x-powered-by');

// Routes
app.get('*', function (req, res, next) {
    res.render('index', config);
});

// Start server
app.listen(app.get('port'), function () {
    var msg = '';
    msg += '\n- \u001b[31mServeJSON - WEB';
    msg += '\u001b[31m at \u001b[0m';
    msg += 'http://localhost:%s\u001b[0m';
    msg  = util.format(msg, app.get('port'));
    console.info(msg);
});
