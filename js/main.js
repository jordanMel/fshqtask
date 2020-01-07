window.onload = function () {

    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);
}

window.onresize = function () {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    initSwiper();


    // var swiperjs1 = document.getElementById('swiperjs1');
    // var swiperjs2 = document.getElementById('swiperjs2');

    // swiperjs1.remove();
    // swiperjs2.remove();



    // var main = document.getElementById('docu-body');

    // var script1 = document.createElement('script');
    // script1.setAttribute('src', 'https://unpkg.com/swiper/js/swiper.js');
    // script1.setAttribute('id', 'swiperjs1');

    // var script2 = document.createElement('script');

    // script2.setAttribute('src', 'https://unpkg.com/swiper/js/swiper.min.js');
    // script2.setAttribute('id', 'swiperjs2');

    // main.append(script1);
    // main.append(script2);


}
