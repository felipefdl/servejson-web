/*jslint node:true*/
/*globals ace, document*/
'use strict';


module.exports = function () {
    setTimeout(function () {
        var editor, content_json;
        editor = ace.edit("editor-ace");
        content_json = document.getElementsByName('content_json')[0];

        editor.getSession().setMode("ace/mode/json");
        editor.setShowPrintMargin(false);

        editor.getSession().setValue('{\n    \n}');
        content_json.value = '{}';

        editor.getSession().on('change', function () {
            content_json.value = editor.getSession().getValue();
        });
    }, 100);
};
