function meni() {
    var menu = $("#menu")[0];
    if (menu.style.display === "none" || menu.style.display == '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
