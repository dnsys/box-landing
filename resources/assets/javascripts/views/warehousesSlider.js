import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class ReviewsBlock{
    constructor () {
        console.log('inside');
        $('.photo-warehouses__tabs-content-slider').owlCarousel({
            items:1,
            margin:10,
            nav:true,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            dots: false
        });
    }
}
export default ReviewsBlock;