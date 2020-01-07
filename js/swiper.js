this.initmyslides();
this.initSwiper();

var mySwiper;

function initSwiper() {
    if (mySwiper == undefined) {
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            updateOnWindowResize: true,
            observer: true,
            observerParents: true,
            resizeReInit: true,
            breakpoints: {
                600: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                }
            }
        });
    } else {
        mySwiper.destroy(true, true);
        mySwiper = undefined;
        mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',

            },
            updateOnWindowResize: true,
            observer: true,
            observerParents: true,
            resizeReInit: true,
            breakpoints: {
                600: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                }
            }
        });

    }

}

function initmyslides() {
    var sr = document.getElementById('swiper-wrapper');

    for (i = 1; i < 13; i++) {

        var slide = document.createElement('div');
        var innderdiv = document.createElement('div');
        var slideimg = document.createElement('img');
        var prevbtn = document.createElement('button');
        var src = 'assets/Desktop/JPG/' + i + '.jpg';

        sr.append(slide);
        slide.setAttribute('class', 'swiper-slide');
        slide.appendChild(innderdiv);
        innderdiv.appendChild(slideimg);
        innderdiv.append(prevbtn);

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

    for (var x = 0; x < 12; x++) {

        slideimages[x].onclick = function () {
            viewFullScreen('assets/Desktop/JPG/' + this.id.charAt(0) + 'full.jpg')
        }


        btns[x].onclick = function () {
            viewFullScreen('assets/Desktop/JPG/' + this.id.charAt(0) + 'full.jpg')
        }

    }
}

function viewFullScreen(src) {
    document.getElementById('pop-up').style.display = 'flex';
    document.getElementById('img-full').setAttribute('src', src);
    document.getElementById('img-full').style.objectFit = 'contain';
    document.getElementById('docu-body').style.overflow = 'hidden';
}

document.getElementById('close').onclick = () => {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('docu-body').style.overflow = 'auto';
}


