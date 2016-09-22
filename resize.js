function resizeHandler() {
var workingAreaHeight = $(window).height();
var menuBarHeight = $("#top_bar").height();

$("body").height(workingAreaHeight-menuBarHeight);
$("#divColumnsWrapper").height(workingAreaHeight-menuBarHeight);
$("#divCodeView").height(workingAreaHeight-menuBarHeight);
$("#divLibraryView").height(workingAreaHeight-menuBarHeight);
$("#divTreeView").height(workingAreaHeight-menuBarHeight);
$("#tree-container").height(workingAreaHeight-menuBarHeight);
$(".CodeMirror").height(workingAreaHeight-menuBarHeight);
var viewerWidth = $("#tree-container").width();
var viewerHeight = $("#tree-container").height();

// -2 compensating for arbitrary svg viewer placement of scrollbars
$("#svg_tree").width(viewerWidth-2);
$("#svg_tree").height(viewerHeight-2);

}
