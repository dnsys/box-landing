import $ from 'jquery';
import ionRangeSlider from 'ion-rangeslider';

class Application{
    constructor(){
        console.log('application start');
        document.addEventListener('DOMContentLoaded', () => {
             console.log('application ready');
             this._rangeSquareInit();
             this._rangeTimeRent();
        })
    }

    _rangeSquareInit() {
        let cost;
        $('#squareInput').ionRangeSlider({
            //type: "single",
            //min: 1,
            //max: 10,
            values: ['1m²', '6m²', '9m²', '12m²', '35m²'],
            from: 0,
            step: 1,
            grid: true,
            grid_snap: true,
            onStart: function (data) {
                $('span.square').text(data.from);
                switch(data.from){
                    case 0: cost = 1000; break;
                    case 1: cost = 2000; break;
                    case 2: cost = 3000; break;
                    case 3: cost = 4000; break;
                    case 4: cost = 5000; break;
                }
                console.log(cost);
            },
            onChange: function (data) {
                $('span.square').text(data.from);
                let cost;
                switch(data.from){
                    case 0: cost = 1000; break;
                    case 1: cost = 2000; break;
                    case 2: cost = 3000; break;
                    case 3: cost = 4000; break;
                    case 4: cost = 5000; break;
                }
                console.log(cost);
            }
        });
    }
    _rangeTimeRent() {
        $('#timeRent').ionRangeSlider({
            type: "single",
            min: 1,
            max: 12,
            from: 1,
            step: 1,
            grid: true,
            grid_snap: true,
            onStart: function (data) {
                $('span.time').text(data.from);
            },
            onChange: function (data) {
                $('span.time').text(data.from);
            }
        });
    }
}

new Application();
