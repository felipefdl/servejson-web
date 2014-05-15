/*jslint node:true*/
/*globals ace, document*/
'use strict';

var editor = ace.edit("editor-ace");

function ace_editor_loader() {
    editor.getSession().setMode("ace/mode/json");
    editor.setShowPrintMargin(false);

    editor.getSession().setValue('{\n    \n}');
}

function newjson($scope) {
    ace_editor_loader();
    $scope.submit = function (newjob) {
        newjob.content_json = editor.getSession().getValue();
        console.log(newjob);
    };
}

module.exports = newjson;
