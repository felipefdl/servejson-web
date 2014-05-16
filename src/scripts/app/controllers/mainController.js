/*jslint node:true*/
/*globals window*/
'use strict';

function get_error_list($http) {
    var objrequest = {
        'method': 'get',
        'url': window.api_server + '/docs/errors',
        'cache': true
    };

    $http(objrequest).success(function (data) {
        window.errors = data;
    });
}

module.exports = function mainController($http) {
    get_error_list($http);
};
