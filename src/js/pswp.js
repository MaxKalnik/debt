var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var items = [
        {
            src: 'https://static0.rewardexpert.com/shared/staging/debt-map-zip/images/map-1920@2x.png',
            srcset: 'https://static0.rewardexpert.com/shared/staging/debt-map-zip/images/map-1920@2x.png 2x',
            w: 2040,
            h: 960
        }
    ];

if(windowWidth < 780) {
    items[0].w = 1360;
    items[0].h = 640;
}

var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = items;

    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

var map = document.querySelector('.frame-container');

map.addEventListener('click', function() {
    openPhotoSwipe(items);
});

document.getElementById("#frame-zip").contentWindow.document.body.onclick = 
function() {
  alert("iframe clicked");
}