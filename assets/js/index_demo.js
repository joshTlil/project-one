var urlSuffix = atob("ZWY5ZjNmOTY2Y2UyZjJjZTY1ZGUyMDA0YTU5MTkwMzI=");
var clicked1 = true;
var clicked2 = true;
var clicked3 = true;
var clicked4 = true;

$('.show-btn1').click(function() {
    if (clicked1) {
        $('.hide1').show();
        clicked1 = false;
        var city = 'atlanta';
        var apiKey = urlSuffix;
        var apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + apiKey;
        console.log("API URL: " + 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=xxxInsertYourAPIkey_ThisOneWontWorkxx');
        console.log("API key: " + 'xxxInsertYourAPIkey_ThisOneWontWorkxxx');
    } else if (!clicked1) {
        $('.hide1').hide();
        console.clear();
        clicked1 = true;
    }
    return
});

$('.show-btn2').click(function() {
    if (clicked2) {
        $('.hide2').show();
        clicked2 = false;
        var lat = 33.749;
        var lon = -84.388;
        var apiKey = urlSuffix;
        var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&exclude=hourly&units=imperial';
        fetch(apiUrl)
            .then(function (response) {             
                return response.json();
            })
            .then(function (data) {
                console.log("Temp: " + Math.round(data.current.temp));
                console.log("Wind: " + Math.round(data.current.wind_speed));
             });
    } else if (!clicked2) {
        $('.hide2').hide();
        console.clear();
        clicked2 = true;
    }
    return
});

$('.show-btn3').click(function() {
    if (clicked3) {
        $('.hide3').show();
        clicked3 = false;
        var lat = 33.749;
        var lon = -84.388;
        var city = 'Atlanta';
        var apiKey = urlSuffix;
        var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&exclude=hourly&units=imperial';
        fetch(apiUrl)
            .then(function (response) {             
                return response.json();
            })
            .then(function (data) {
                for (var i = 1; i < 5; i++) {
                console.log("Atlanta: " + i + " day(s) from now Max Temp: " + Math.round(data.daily[i].temp.max));
                console.log("Atlanta: " + i + " day(s) from now Wind Speed: " + Math.round(data.daily[i].wind_speed));
            }
             });
    } else if (!clicked3) {
        $('.hide3').hide();
        console.clear();
        clicked3 = true;
    }
    return
});

$('.show-btn4').click(function() {
    if (clicked4) {
        $('.hide4').show();
        clicked4 = false;
    } else if (!clicked4) {
        $('.hide4').hide();
        console.clear();
        clicked4 = true;
    }
    return
});