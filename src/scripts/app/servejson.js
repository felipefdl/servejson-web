/*jslint node:true*/
/*globals angular*/
'use strict';

var controllers = require('./controllers/');
var frontend    = require('./frontend/');

(function () {
    var sevejson = angular.module('servejson', []);

    sevejson.controller('mainController', controllers.mainController);
    sevejson.controller('home', controllers.home);
}());

//Frontend
frontend.init();
