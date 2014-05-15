/*jslint node:true*/
/*globals angular*/
'use strict';

var routes      = require('./routes.js');
var controllers = require('./controllers/');

(function () {
    var sevejson = angular.module('servejson', ['ngRoute']);

    sevejson.config(routes);
    sevejson.controller('mainController', controllers.mainController);
    sevejson.controller('home', controllers.home);
}());
