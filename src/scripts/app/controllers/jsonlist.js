/*jslint node:true*/
/*globals window*/
'use strict';

module.exports = function jsonlist($scope, $http) {
    var objrequest = {
        'method': 'get',
        'url': window.api_server + '/route/get_all',
        'cache': true
    };

    $http(objrequest).success(function (data) {
        if (data.status) {
            $scope.routes = data.result;
        }
    });
};
