/*jslint node:true*/
'use strict';

module.exports = function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            'templateUrl': '/templates/home.html'
        });
};
