import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

class WareHousesSliderMobile{
    constructor () {
        console.log('inside');
        $('.photo-warehouses__mobile-slider').owlCarousel({
            items:1,
            //autoWidth: true,
            center: false,
            stagePadding: 100,
            margin:10,
            nav:false,
            loop: true,
            dots: false
        });
    }
}
export default WareHousesSliderMobile;