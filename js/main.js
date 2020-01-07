window.onload = function () {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

window.onresize = function () {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    initSwiper();
}
