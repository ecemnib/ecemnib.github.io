
function seekTime(e) {
    var vid = e.explicitOriginalTarget;
    console.log(vid.currentTime);
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var mouseX = e.clientX;
    var duration = vid.duration;
    var currentTime = vid.currentTime;
    console.log(mouseX, duration, currentTime);
    var timeSlice = duration / w;
    console.log(timeSlice * mouseX);
    vid.playbackRate = timeSlice * mouseX;
}

var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {

    var i;

    var allSlides = document.getElementsByClassName(slideId[no]);

    var numOfSlides = allSlides.length;

    if (n > numOfSlides) {
        slideIndex[no] = 1
    }

    if (n < 1) {
        slideIndex[no] = numOfSlides
    }
    for (i = 0; i < numOfSlides; i++) {
        allSlides[i].className = slideId[no] + " padding";
    }
    allSlides[slideIndex[no] - 1].className = slideId[no] + " showing padding";
    var parent = allSlides[slideIndex[no] - 1].parentNode.parentNode;
    var index = slideIndex[no];
    console.log((index - 1), index, (index + 1));
    var prev = parent.getElementsByClassName("prev");
    var next = parent.getElementsByClassName("next");
    var prevnum;
    var nextnum;

    prevnum = pad((index - 1), 2);
    nextnum = pad((index + 1), 2);

    if (index == 1) {
        prevnum = pad(numOfSlides, 2);
    }
    if (index == numOfSlides) {
        nextnum = pad(1, 2);
    }

    /*
    prev[0].innerHTML = "< " + prevnum + "/" + pad(numOfSlides, 2);
    next[0].innerHTML = nextnum + "/" + pad(numOfSlides, 2) + " >";*/
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

window.onload = function () {

    setTimeout("plusSlides(1, 0)", 3000);
}

function showmenu() {
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");
    name.innerHTML = "Menu";
    menu.style.opacity = 1;
    menu.style.height = "320px";
    menu.style.paddingLeft = "50px";

}

function hidemenu() {
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");
    name.innerHTML = "Matteo Bauer-Bornemann";
    menu.style.opacity = 0;
    menu.style.height = "0px";
    menu.style.paddingLeft = "0px";
}

function togglemenu() {
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");
    var state = menu.style.opacity;
    if (state == 0) {
        name.innerHTML = "Menu";
        menu.style.opacity = 1;
        menu.style.height = "320px";
        menu.style.paddingLeft = "50px";
    } else if (state == 1) {
        name.innerHTML = "Matteo Bauer-Bornemann";
        menu.style.opacity = 0;
        menu.style.height = "0px";
        menu.style.paddingLeft = "0px";
    }

}

function tail(e){
    var tail = document.getElementById("tail");
    tail.style.left = e.pageX + 20;
    tail.style.top = e.pageY;
}