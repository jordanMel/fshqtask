var menu_close = true;
var width;


window.onresize = function () {
    this.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
}



function onClickMenuBtn() {

    var menu_titles = document.getElementsByClassName('menu-titles');

    if (menu_close) {
        document.getElementsByClassName('navbarwrapper')[0].style.marginLeft = '0';
        document.getElementById('menu-icon').style.display = 'none';
        document.getElementById('close-icon').style.display = 'block';
        document.getElementById('logo-img-mobile').style.display = 'none';
        document.getElementById('title-menu').style.display = 'block';

    } else {
        document.getElementsByClassName('navbarwrapper')[0].style.marginLeft = '100%';
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
        document.getElementById('logo-img-mobile').style.display = 'block';
        document.getElementsByClassName('headset-menu')[0].style.marginLeft = '100%';
        document.getElementsByClassName('dropdown-content')[0].style.marginLeft = '100%';

        for (let element of menu_titles) {
            element.style.display = 'none';
        }
    }

    menu_close = !menu_close;

}

function onclickProductsBtn() {
    if (width < 768) {
        var dropContent = document.getElementsByClassName('dropdown-content');

        document.getElementById('title-menu').style.display = 'none';
        document.getElementById('title-products').style.display = 'block';
        dropContent[0].style.marginLeft = '0';
    }

}

document.getElementById('dropdown').onmouseover = function () { document.getElementsByClassName('dropdown-content')[0].style.display = 'block'; }
document.getElementById('dropdown').onmouseout = function () { document.getElementsByClassName('dropdown-content')[0].style.display = 'none'; }

document.getElementById('title-products').onclick = function () {
    document.getElementById('title-products').style.display = 'none';
    document.getElementById('title-menu').style.display = 'block';
    document.getElementsByClassName('dropdown-content')[0].style.marginLeft = '100%';
}

document.getElementById('headset-link').onclick = function () {
    if (width < 768) {
        document.getElementsByClassName('headset-menu')[0].style.marginLeft = '0';
        document.getElementById('title-products').style.display = 'none';
        document.getElementById('title-headset').style.display = 'block';
    }
}

document.getElementById('headset-link').onmouseover = function () { document.getElementById('icon-forward').setAttribute('src', 'assets/Desktop/SVG/Green Drop Down copy.svg') }
document.getElementById('headset-link').onmouseout = function () { document.getElementById('icon-forward').setAttribute('src', 'assets/Desktop/SVG/Gray Drop Down.svg') }

document.getElementById('title-headset').onclick = function () {
    document.getElementById('title-headset').style.display = 'none';
    document.getElementById('title-products').style.display = 'block';
    document.getElementsByClassName('headset-menu')[0].style.marginLeft = '100%';
}













