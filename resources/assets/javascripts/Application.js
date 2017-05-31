import $ from 'jquery';
import ionRangeSlider from 'ion-rangeslider';
import magnificPopup from 'magnific-popup';
import selectize from 'selectize';
import warehousesSlider from './views/warehousesSlider';

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
            console.log('application ready');
            new warehousesSlider();
            this._initTriggerAnimation();
            this._playPopupVideo();
            this._initMap();
            this._calculatorInit();
            this._initTabsSlider();
            this._initMobileCalc();
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

    _initMobileCalc() {
        let cost;
        let month = $('#timeRentSelect option:selected').val();
        let sum;
        let $selectSquare = $('#squareInputSelect');
        let $selectTime = $('#timeRentSelect');
        let imgContainerSrc;
        let imgContainer = $('.calculator__image-container img');
        $selectSquare.selectize({
            create: true,
            dropdownParent: 'body',
            onChange: function(value) {
                switch(value){
                    case "0": cost = 1000; imgContainerSrc = '1m'; break;
                    case "1": cost = 2000; imgContainerSrc = '6m'; break;
                    case "2": cost = 3000; imgContainerSrc = '9m'; break;
                    case "3": cost = 4000; imgContainerSrc = '12m'; break;
                    case "4": cost = 5000; imgContainerSrc = '35m'; break;
                }
                sum = cost * month;
                $('.calculator__output span').text(sum);
                imgContainer.attr('src', './images/containers/'+imgContainerSrc+'.png');
                let descr = $('#squareInputSelect option:selected').text();
                console.log(descr);
                $('.calculator__square-descr span').text(descr);
            }
        });
        $selectTime.selectize({
            create: true,
            dropdownParent: 'body',
            onChange: function(value) {
                month = parseInt(value);
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

    _initTabsSlider() {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("photo-warehouses__tabs-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("photo-warehouses__tabs-link");
        let activeTabContent = document.querySelector('.photo-warehouses__tabs-link.active').getAttribute('data-tab');
        document.getElementById(activeTabContent).style.display="block";
        [].forEach.call(tablinks, tab => {
            tab.addEventListener('click', () =>
                this._clickTab(tab, tabcontent, tablinks))
        });
    }

    _clickTab(tab, tabcontent, tablinks) {
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove('active');
        }
        tab.classList.add('active');
        let idTabContent = tab.getAttribute('data-tab');
        document.getElementById(idTabContent).style.display='block';
    }

    _initTriggerAnimation() {
        let $massAnimation = $('[data-animate]');
        let $window = $(window);
        $massAnimation.css('visibility', 'hidden');
        //VIEWPORT TRIGGER
        $window.on('scroll', function () {
            $massAnimation.each(function () {
                let $this = $(this);

                if($this.data('isAnimate')) return;

                if ( $window.scrollTop() + ($window.height() * 0.9 ) > $this.offset().top) {
                    let animation = $this.data('animate');
                    let delay = $this.data('delay');
                    $this.css('animation-delay', delay + 's');
                    $this.animateCss(animation);
                    $this.css('visibility', '');
                    $this.data('isAnimate', true)
                }
            });
        }).trigger('scroll');
    }
}

new Application();
