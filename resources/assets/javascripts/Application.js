import $ from 'jquery';
import ionRangeSlider from 'ion-rangeslider';

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             console.log('application ready');
             this._calculatorInit();
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
}

new Application();
