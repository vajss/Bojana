function meni() {
    var menu = $("#menu")[0];
    if (menu.style.display === "none" || menu.style.display == '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
/*
function changeLocation(location){
        window.location.pathname = "EPOS/" + location;
}*/
/*
$(document).ready(function () {
    var menu = $("#menu")[0];
    if(window.location.pathname != "/Heineken/index.html"){
        menu.style.display = "block";

        if(window.location.pathname == "/Heineken/about-us.html"){
            $("#about-us")[0].firstElementChild.style.color = "white"
        }
        else if(window.location.pathname == "/Heineken/contact.html"){
            $("#contact")[0].nextElementChild.style.color = "white"
        }
        else {
            $("#gallery")[0].nextElementChild.style.color = "white"
        }
    }

    else {
        $("#home")[0].secondtElementChild.style.color = "white"
    }
})
;*/