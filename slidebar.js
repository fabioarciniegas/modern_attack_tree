function openNav() {
// TODO: calculate width as proportion of screen size
    document.getElementById("divLibraryView").style.width = "250px";
    document.getElementById("divCodeView").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("divLibraryView").style.width = "0";
    document.getElementById("divCodeView").style.width="45%";
    document.getElementById("divTreeView").style.width="43%";
}
