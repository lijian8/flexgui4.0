function scriptEditorController(a,b,c,d,e,f){var g=null;a.aceLoaded=function(b){a.currentEditor=b,a.id="scriptEditor_"+e.guid(),angular.forEach($(".ace_editor"),function(a){$(a).hasClass("ace-flexgui")||$(a).addClass("ace-flexgui")})},a.setCurrentProperty=function(a){g=a},a.fidgetPropertyEdited=function(){a.currentEditor.getSession().getDocument().getValue()!=b.editedFidget.properties[g]&&(b.editedFidget.properties[g]=a.currentEditor.getSession().getDocument().getValue())},a.diagScriptEdited=function(){d.editedTest.script!=a.currentEditor.getSession().getDocument().getValue()&&(d.editedTest.script=a.currentEditor.getSession().getDocument().getValue())},a.initEdited=function(){c.initScript!=a.currentEditor.getSession().getDocument().getValue()&&(c.initScript=a.currentEditor.getSession().getDocument().getValue())},a.styleEdited=function(){c.styleSheed!=a.currentEditor.getSession().getDocument().getValue()&&(c.styleSheed=a.currentEditor.getSession().getDocument().getValue())},a.editorStyle={},a.isFullscreen=!1,a.setFullscreen=function(b){a.isFullscreen=b,b?(a.editorStyle.width=$(window).width(),a.editorStyle.height=$(window).height(),f(function(){a.editorStyle.top=-$("#"+a.id).position().top,a.editorStyle.left=-$("#"+a.id).position().left,f(function(){a.currentEditor.resize()},0)},0,!0)):(a.editorStyle={},f(function(){a.currentEditor.resize()},0))},$(window).resize(function(){a.isFullscreen&&(a.editorStyle.width=$(window).width(),a.editorStyle.height=$(window).height(),f(function(){a.editorStyle.top=-$("#"+a.id).position().top,a.editorStyle.left=-$("#"+a.id).position().left,f(function(){a.currentEditor.resize()},0)},0,!0),a.currentEditor.resize())})}scriptEditorController.$inject=["$scope","editorService","projectService","diagnosticsService","variableService","$timeout"];