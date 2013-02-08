YUI.add('weatherApp',function(Y){
    Y.WeatherApp = Y.Base.create('weatherApp', Y.Base, [],{


    },{
        ATTRS:{
            weatherView: {type: 'WeatherView'}
        }
    });
}, '0.0.1', { requires: ['app','weatherModel','weatherView']});