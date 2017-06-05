import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class WareHousesSlider{
    constructor () {
        console.log('inside');
        $('.photo-warehouses__tabs-content-slider').owlCarousel({
            items:1,
            margin:10,
            nav:true,
            loop: true,
            navText: [
                '<i class="fa fa-angle-left photo-warehouses__arrow" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right photo-warehouses__arrow" aria-hidden="true"></i>'
            ],
            dots: false
        });
    }
}
export default WareHousesSlider;