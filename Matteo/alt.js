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

function showTails(no) {
    
    var i;

    var allSlides = document.getElementsByClassName(slideId[no]);

    var numOfSlides = allSlides.length;

    var activeSlide = allSlides[slideIndex[no] - 1];

    var slideshow = activeSlide.parentNode;
    var parent = slideshow.parentNode;
    var index = slideIndex[no];
    var prev = parent.getElementsByClassName("prev");
    var next = parent.getElementsByClassName("next");
    var prevtail = document.getElementById("prevtail");
    var nexttail = document.getElementById("nexttail");
    var prevnum;
    var nextnum;

    prevnum = pad((index - 1), 2);
    nextnum = pad((index + 1), 2);
    
    prevtail.innerHTML = pad(prevnum, 2) + "/" + pad(numOfSlides, 2);
    nexttail.innerHTML = pad(nextnum, 2) + "/" + pad(numOfSlides, 2);

    if (index == 1) {
        prevtail.innerHTML = "";
    }
    if (index == numOfSlides) {
        prevtail.innerHTML = "";
        nexttail.innerHTML = "";
    }
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
        var slide = allSlides[i];
        slide.classList.remove("showing");
        slide.classList.add(slideId[no], "padding");
    }

    var activeSlide = allSlides[slideIndex[no] - 1];

    activeSlide.classList.add("showing");

    var slideshow = activeSlide.parentNode;
    var parent = slideshow.parentNode;
    console.log(slideshow, parent);
    var index = slideIndex[no];

    console.log((index - 1), index, (index + 1));

    var prev = parent.getElementsByClassName("prev");
    var next = parent.getElementsByClassName("next");
    var prevtail = document.getElementById("prevtail");
    var nexttail = document.getElementById("nexttail");
    var prevnum;
    var nextnum;

    prevnum = pad((index - 1), 2);
    nextnum = pad((index + 1), 2);

    prev[0].style.visibility = "visible";
    next[0].style.visibility = "visible";
    
    prevtail.innerHTML = pad(prevnum, 2) + "/" + pad(numOfSlides, 2);
    nexttail.innerHTML = pad(nextnum, 2) + "/" + pad(numOfSlides, 2);

    if (index == 1) {
        prevtail.innerHTML = "";
        prev[0].style.visibility = "hidden";
    }
    if (index == numOfSlides) {
        prevtail.innerHTML = "";
        nexttail.innerHTML = "";
        document.getElementById(no + 1).style.visibility = "hidden";
        document.getElementById(no + 1).style.display = "none";
        next[0].style.visibility = "hidden";
    } else {
        document.getElementById(no + 1).style.visibility = "visible";
        document.getElementById(no + 1).style.display = "block";
    }
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function showmenu() {
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");
    name.innerHTML = "Kontakt";
    menu.style.opacity = 1;
    menu.style.height = "120px";

}

function hidemenu() {
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");
    name.innerHTML = "Matteo Bauer-Bornemann";
    menu.style.opacity = 0;
    menu.style.height = "0px";
}

function togglemenu() {
    var div = document.getElementById("name");
    var menu = document.getElementById("menu");
    var name = document.getElementById("nametext");

    var state = menu.style.opacity;

    if (state == 0) {
        name.innerHTML = "Kontakt";
        div.style.color = "#fff";
        div.style.backgroundColor = "#2e2382";
        menu.style.opacity = 1;
        menu.style.height = "120px";
    } else if (state == 1) {
        name.innerHTML = "Matteo Bauer-Bornemann";
        div.style.color = "#2e2382";
        div.style.backgroundColor = "#fff";
        menu.style.opacity = 0;
        menu.style.height = "0px";
    }

}

$(document).bind('mousemove', function (e) {
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    var prevtail = document.getElementById("prevtail");
    var nexttail = document.getElementById("nexttail");
    
    $('#prevtail').css({
        left: (e.pageX + w/4) - prevtail.clientWidth/2,
        top: e.pageY - prevtail.clientHeight/2
    });
    $('#nexttail').css({
        left: (e.pageX - w/4) - nexttail.clientWidth/2,
        top: e.pageY - nexttail.clientHeight/2
    });
});



$(".prev").hover(function () {
    $("#prevtail").css({
        opacity: 1
    });
},
                 function(){
    $("#prevtail").css({
        opacity: 0
    });
});

$(".next").hover(function () {
    $("#nexttail").css({
        opacity: 1
    });
},
   function(){
    $("#nexttail").css({
        opacity: 0
    });
});
        
        
