import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class MobileReviewsSlider{
    constructor () {
        let reviewsSlider = $('.video-section__slider');
        reviewsSlider.owlCarousel({
            margin: 20,
            autoWidth: true,
            loop: true,
            autoHeight: false,
            autoHeightClass: 'owl-height',
            responsive:{
                480:{
                    items:1
                }
            }
        });
    }
}
export default MobileReviewsSlider;