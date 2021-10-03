//declare our global variables and obfuscate the API key
var urlSuffix = atob("ZWY5ZjNmOTY2Y2UyZjJjZTY1ZGUyMDA0YTU5MTkwMzI=");
var clicked1 = true;
var clicked2 = true;
var clicked3 = true;
var clicked4 = true;

//attach an event to the first button and log variables to the console
$(".show-btn1").click(function () {
  if (clicked1) {
    $(".hide1").show();
    clicked1 = false;
    var city = "atlanta";
    var lat = 33.749;
    var lon = -84.388;
    var apiKey = "insert_your_api_key_here";
    console.log("Latitude: " + lat);
    console.log("Longitude: " + lon);
    console.log(
      "API URL: " +
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=insert_your_api_key_here&exclude=hourly&units=imperial"
    );
    console.log("API key: " + "insert_your_api_key_here");
  } else if (!clicked1) {
    $(".hide1").hide();
    console.clear();
    clicked1 = true;
  }
  return;
});

//attach an event to the second button, perform an API call, round the results, log to console
$(".show-btn2").click(function () {
  if (clicked2) {
    $(".hide2").show();
    clicked2 = false;
    var lat = 33.749;
    var lon = -84.388;
    var apiKey = urlSuffix;
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&exclude=hourly&units=imperial";
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("Temp: " + Math.round(data.current.temp));
        console.log("Wind: " + Math.round(data.current.wind_speed));
      });
  } else if (!clicked2) {
    $(".hide2").hide();
    console.clear();
    clicked2 = true;
  }
  return;
});

//attach an event to the third button, perform an API call, loop through an array, log to console
$(".show-btn3").click(function () {
  if (clicked3) {
    $(".hide3").show();
    clicked3 = false;
    var lat = 33.749;
    var lon = -84.388;
    var city = "Atlanta";
    var apiKey = urlSuffix;
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&exclude=hourly&units=imperial";
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < 5; i++) {
          var j = i + 1;
          console.log(
            "Atlanta: " +
              j +
              " day(s) from now Max Temp: " +
              Math.round(data.daily[i].temp.max)
          );
          console.log(
            "Atlanta: " +
              j +
              " day(s) from now Wind Speed: " +
              Math.round(data.daily[i].wind_speed)
          );
        }
      });
  } else if (!clicked3) {
    $(".hide3").hide();
    console.clear();
    clicked3 = true;
  }
  return;
});

//attach an event to the fourth button, perform an API call, create cards and output results to the page
$(".show-btn4").click(function () {
  if (clicked4) {
    $(".hide4").show();
    clicked4 = false;
    var lat = 33.749;
    var lon = -84.388;
    var city = "Atlanta";
    var apiKey = urlSuffix;
    var apiUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&exclude=hourly&units=imperial";
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < 4; i++) {
          $("<div>", { class: "m-3 w-20 d-inline-flex" })
            .append(
              $(
                "<div class='card w-20'><img class='card-img-top mw-25' src='https://openweathermap.org/img/wn/" +
                  data.daily[i].weather[0].icon +
                  "@4x.png' alt='weather icon'><div class='card-body'>" +
                  "<p class='card-text'>Temp: " +
                  Math.round(data.daily[i].temp.max) +
                  "°F</p><p class='card-text'>Wind: " +
                  Math.round(data.daily[i].wind_speed) +
                  " MPH</p><p class='card-text'>Humidity: " +
                  data.daily[i].humidity +
                  "%</p></div></div></div>"
              )
            )
            .appendTo($("#daily"));
        }
      });
  } else if (!clicked4) {
    $(".hide4").hide();
    console.clear();
    clicked4 = true;
  }
  return;
});
