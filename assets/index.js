var key = "906bce164e6d6b3cef2ee393564a59fe";
function getWeather(key){
    var weatherAPI = 'api.openweathermap.org/data/2.5/weather?q=houston&appid=api.openweathermap.org/data/2.5/weather?q=houston&appid=' + key;
    fetch(weatherAPI).then(function(res){
        if(res.ok){
            res.json().then(function(data){
                displayWeather(data);
            });
        }
        else{console.log(res.text);}
    });
}