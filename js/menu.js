const menu_mobile = document.getElementById('menu-mobile');

function onClickMenuBtn() {
  menu_mobile.style.marginLeft = '0';
}

function CloseMenu(element) {
  element.style.marginLeft = '100%';
}


function CloseAllMenu() {
  document.getElementById('menu-mobile').style.marginLeft = '100%';
  document.getElementById('menu-mobile-products').style.marginLeft = '100%';
  document.getElementById('menu-mobile-headset').style.marginLeft = '100%';
}



document.getElementById('headset-link').onmouseover = function () { document.getElementById('icon-forward').setAttribute('src', 'assets/Desktop/SVG/Green Drop Down copy.svg') }
document.getElementById('headset-link').onmouseout = function () { document.getElementById('icon-forward').setAttribute('src', 'assets/Desktop/SVG/Gray Drop Down.svg') }

document.getElementById('products-link').onfocus = function () { changeIcon(true, 'icon-forward-products', 'icon-forward-products-active') };
document.getElementById('products-link').onblur = function () { changeIcon(false, 'icon-forward-products', 'icon-forward-products-active') };

document.getElementById('headset-linkbtn').onfocus = function () { changeIcon(true, 'icon-forward-headset', 'icon-forward-headset-active') };
document.getElementById('headset-linkbtn').onblur = function () { changeIcon(false, 'icon-forward-headset', 'icon-forward-headset-active') };




function changeIcon(active, img_default, img_active) {
  document.getElementById(img_default).style.display = active ? 'none' : 'block';
  document.getElementById(img_active).style.display = active ? 'block' : 'none';
}

function showProductsMenu() {
  console.log('click');
  document.getElementById('menu-mobile-products').style.marginLeft = '0';
  document.getElementById('menu-mobile-products').style.marginLeft = '0';
}


// menu open
document.getElementById('headset-linkbtn').onclick = function () {
  document.getElementById('menu-mobile-headset').style.marginLeft = '0';
};
















