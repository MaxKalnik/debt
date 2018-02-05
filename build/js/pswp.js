'use strict';

var items = [
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/debt-map-zip/images/map-1920@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/debt-map-zip/images/map-1920@2x.png 2x',
                w: 2040,
                h: 960
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/debt-map-offenders/images/map-1-1920@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/debt-map-offenders/images/map-1-1920@2x.png 2x',
                w: 2040,
                h: 960
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/debt-map-runners-up/images/map-2-1920@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/debt-map-runners-up/images/map-2-1920@2x.png 2x',
                w: 2040,
                h: 960
            }
        ]
    ];

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var xsmall = 780;

var responsiveInput = function (array) {
    for (var i = 0; i < array.length; i++) {
        array[i][0].w = 1360;
        array[i][0].h = 640;
    }
};

if(windowWidth < xsmall) {
    responsiveInput(items);
};

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
