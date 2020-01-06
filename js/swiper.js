
var mySwiper;

window.onresize = function () {
    this.reloadSwiperOnResize();
    this.togglebtndisplay();

}

window.onload = function () {
    this.initSwiper();
    this.togglebtndisplay();
}


window.initmyslides();



function initSwiper() {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (mySwiper) {
        mySwiper.destroy(true, true);

    }
    if (width < 600) {
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            slidesPerView: 1,
            slidesPerGroup: 1,
        });

    } else if (width < 768) {
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        });
    } else if (width < 992) {
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        });

    } else {
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        });

    }


}



function initmyslides() {
    var sr = document.getElementById('swiper-wrapper');


    for (i = 1; i < 13; i++) {
        // console.log(i);
        var slide = document.createElement('div');
        var innderdiv = document.createElement('div');

        var slideimg = document.createElement('img');

        var prevbtn = document.createElement('button');
        sr.append(slide);
        slide.setAttribute('class', 'swiper-slide');


        slide.appendChild(innderdiv);
        innderdiv.appendChild(slideimg);

        innderdiv.append(prevbtn);

        var src = 'assets/Desktop/JPG/' + i + '.jpg';


        slideimg.setAttribute('src', src);
        slideimg.setAttribute('user-select', 'none');
        slideimg.setAttribute('z-index', '10');
        slideimg.setAttribute('class', 'slideimg');
        slideimg.setAttribute('id', i + 'slideimg');

        prevbtn.innerHTML = 'VIEW FULLSCREEN';
        prevbtn.setAttribute('class', 'previewfull');
        prevbtn.setAttribute('id', i + 'D');
    }

    var btns = document.getElementsByClassName('previewfull');
    var slideimages = document.getElementsByClassName('slideimg');

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;



    for (var x = 0; x < 12; x++) {

        slideimages[x].onclick = function () {
            viewFullScreen('assets/Desktop/JPG/' + this.id.charAt(0) + 'full.jpg')
        }


        btns[x].onclick = function () {
            viewFullScreen('assets/Desktop/JPG/' + this.id.charAt(0) + 'full.jpg')
        }

    }
}







function reloadSwiperOnResize() {
    if (mySwiper) {
        mySwiper.destroy(true, true);
        initSwiper();
    }

}



function togglebtndisplay() {
    // console.log(document.getElementsByClassName('previewfull'));
    var prevbtns = document.getElementsByClassName('previewfull');

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;


    for (let btn of prevbtns) {

        if (width < 992) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'block';
        }



    }


}



function viewFullScreen(src) {
    document.getElementById('pop-up').style.display = 'flex';
    document.getElementById('img-full').setAttribute('src', src);
    document.getElementById('img-full').style.objectFit = 'contain';
    // document.getElementById('img-full').setAttribute('height', 'auto');
    document.getElementById('docu-body').style.overflow = 'hidden';
}


document.getElementById('close').onclick = () => {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('docu-body').style.overflow = 'auto';

}


