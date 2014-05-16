/*jslint node:true, todo:true*/
/*globals window*/
'use strict';

function get_all_routes($http, callback) {
    var objrequest = {
        'method': 'get',
        'url': window.api_server + '/route/get_all',
        'cache': false
    };

    $http(objrequest).success(function (data) {
        if (data.status) {
            callback(data.result);
        }
    });
}

module.exports = function jsonlist($scope, $http) {
    var getroutes = function () {
        get_all_routes($http, function (result) {
            $scope.routes = result;
        });
    };

    getroutes();

    // TODO: implement this in socket.io
    setInterval(function () {
        getroutes();
    }, 5000);
};
