window.onload = function () {

    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
}

window.onresize = function () {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width < 768) {
        location.reload();
    }

    initSwiper();

}
