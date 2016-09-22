barsOpen = true;

function toggleBar(bar) {
    if(barsOpen)
	closeNav();
    else
	openNav();
    barsOpen = !barsOpen;
}

function openNav() {
// TODO: calculate width as proportion of screen size
    document.getElementById("divLibraryView").style.width = "33%";
    document.getElementById("divCodeView").style.width="33%";
    document.getElementById("divTreeView").style.width="33%";

}

function closeNav() {
    document.getElementById("divLibraryView").style.width = "0";
    document.getElementById("divCodeView").style.width="50%";
    document.getElementById("divTreeView").style.width="50%";
}
