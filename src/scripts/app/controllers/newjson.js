/*jslint node:true*/
/*globals ace, document, window, $*/
'use strict';

var infra  = require('../infra/');
var editor = ace.edit("editor-ace");

function ace_editor_loader() {
    editor.getSession().setMode("ace/mode/json");
    editor.setShowPrintMargin(false);

    editor.getSession().setValue('{\n    \n}');
}

function newjson($scope, $http) {
    ace_editor_loader();
    $scope.result = {};

    $scope.submit = function (newjob) {
        newjob.json = editor.getSession().getValue();

        var objrequest = {
            'method': 'post',
            'url': window.api_server + '/route/create',
            'cache': false,
            'data': newjob
        };

        $http(objrequest).success(function (data) {
            if (data.status) {
                $scope.result        = newjob;
                $scope.result.result = 'Success';
                $scope.result.route  = infra.remove_slash(newjob.route);
                $scope.result.type   = newjob.type.toUpperCase();
            } else {
                $scope.result.result = 'Error';
                $scope.result.error  = window.errors[data.code[0]];
            }

            $('.resultmodal').modal('show');
        });
    };
}

module.exports = newjson;
