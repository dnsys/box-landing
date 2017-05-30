import $ from 'jquery';
import ionRangeSlider from 'ion-rangeslider';
import magnificPopup from 'magnific-popup';

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             console.log('application ready');
             this._playPopupVideo();
            this._initMap();
            if($(window).width() > 750){
                this._calculatorInit();
            }else {

            }
        })
    }

    _calculatorInit() {
        let cost;
        let month;
        let sum;
        let imgContainerSrc;
        let imgContainer = $('.calculator__image-container img');
        //let irsSingle = $('.calculator__range-group--square .irs-single');
        $('#squareInput').ionRangeSlider({
            type: "single",
            values: ['1m²', '6m²', '9m²', '12m²', '35m²'],
            from: 0,
            step: 1,
            grid: true,
            grid_snap: true,
            onStart: function (data) {
                switch(data.from){
                    case 0: cost = 1000; imgContainerSrc = '1m'; break;
                    case 1: cost = 2000; imgContainerSrc = '6m'; break;
                    case 2: cost = 3000; imgContainerSrc = '9m'; break;
                    case 3: cost = 4000; imgContainerSrc = '12m'; break;
                    case 4: cost = 5000; imgContainerSrc = '35m'; break;
                }
                sum = cost * month;
                $('.calculator__output span').text(sum);
                imgContainer.attr('src', './images/containers/'+imgContainerSrc+'.png');
            },
            onChange: function (data) {
                switch(data.from){
                    case 0: cost = 1000; imgContainerSrc = '1m'; break;
                    case 1: cost = 2000; imgContainerSrc = '6m'; break;
                    case 2: cost = 3000; imgContainerSrc = '9m'; break;
                    case 3: cost = 4000; imgContainerSrc = '12m'; break;
                    case 4: cost = 5000; imgContainerSrc = '35m'; break;
                }
                sum = cost * month;
                $('.calculator__output span').text(sum);
                imgContainer.attr('src', './images/containers/'+imgContainerSrc+'.png');
                let descr = $('.calculator__range-group--square .irs-single').text();
                $('.calculator__square-descr span').text(descr);
            }
        });
        $('#timeRent').ionRangeSlider({
            type: "single",
            min: 1,
            max: 12,
            from: 1,
            step: 1,
            grid: true,
            grid_snap: true,
            onStart: function (data) {
                month = data.from;
                sum = cost * month;
                $('.calculator__output span').text(sum);
            },
            onChange: function (data) {
                month = data.from;
                sum = cost * month;
                $('.calculator__output span').text(sum);
            }
        });
    }

    _initMap() {
        ymaps.ready(init);
        function init(){
            let myMap = new ymaps.Map("mapSection", {
                    center: [55.76, 37.64],
                    zoom: 11
                }),
                firstPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../images/placeholder.png',
                    iconImageSize: [45, 64],
                    iconImageOffset: [-3, -42]
                });
            myMap.geoObjects.add(firstPlacemark);
            firstPlacemark.events.add('click', function () {
                alert('О, событие!');
            });
            myMap.controls.remove('zoomControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('geolocationControl');
        }
    }

    _playPopupVideo() {
        $('.video-block__play-popup').magnificPopup({
            type: 'iframe'
        });
    }
}

new Application();
