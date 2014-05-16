/*jslint node:true*/
/*globals angular*/
'use strict';

var controllers = require('./controllers/');

(function () {
    var sevejson = angular.module('servejson', []);

    sevejson.controller('mainController', controllers.mainController);
    sevejson.controller('newjson', controllers.newjson);
    sevejson.controller('jsonlist', controllers.jsonlist);
}());
