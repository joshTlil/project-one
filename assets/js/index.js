//declare our global variables and obfuscate the API key
var urlSuffix = atob("ZWY5ZjNmOTY2Y2UyZjJjZTY1ZGUyMDA0YTU5MTkwMzI=");
var clicked1 = true;
var clicked2 = true;
var clicked3 = true;
var clicked4 = true;
var clicked5 = true;

//Grab button elements
var startButton = $(".start-button");
var ansButtons = $(".list-group");

//grab quiz components
var quesHolder = $(".question");
var answers = $(".answer");
var indicator = $("#indicator");
var score = 0;

//Quiz object
var quiz = {
  questions: [
    "Where do you obtain your API key?",
    "Where in the URL do you insert your variables?",
    "Why is the response returned as a JSON?",
    "What is .then?",
  ],
  answers: [
    "from the API's website",
    "from my github",
    "from your instructor",
    "from Google",
    "after.com",
    "the beginning",
    "after the ?",
    "after https://",
    "to make it pretty",
    "to manipulate the data as an array",
    "to display changes to the html page",
    "to style it correctly",
    "a promise",
    "a object",
    "a function",
    "a variable",
  ],
  correctAns: [
    "from the API's website",
    "after the ?",
    "to manipulate the data as an array",
    "a promise",
  ],
};

//start button event listener
startButton.on("click", function () {
  //remove start button
  $(startButton).css("display", "none");

  //show ans button
  $(ansButtons).css("display", "initial");

  //show quiz content
  quizRunner();
});

//function to change questions
var x = 0;
var i = 0;
var quizRunner = function () {
  if (i < quiz.questions.length) {
    //change question
    $(quesHolder).text(quiz.questions[i]);

    //change answers
    $(answers[0]).text(quiz.answers[x]);
    $(answers[1]).text(quiz.answers[++x]);
    $(answers[2]).text(quiz.answers[++x]);
    $(answers[3]).text(quiz.answers[++x]);
    i++;
    x++;
  } else {
    quizOver();
  }
};

//function for end of quiz
var quizOver = function () {
  $(quesHolder).text(
    "Quiz Over! Press Start Button to go through questions again. Your score is " + score + ".");

  //remove ans button
  $(ansButtons).css("display", "none");

  //show start button
  $(startButton).css("display", "initial");

  //reset variables
  x = 0;
  i = 0;
  score = 0;

  //reset indicator buttons
  $(indicator).css("display", "none");
};

//answer button event listner
ansButtons.on("click", function (event) {
  //grabs answer text from button clicked
  var buttonClicked = event.target;
  var ans = $(buttonClicked).text();

  //checks if answer is wrong or right
  if (quiz.correctAns[i - 1] == ans) {
    $(indicator).css("display", "initial");
    $(indicator).text("Correct");
    score++;
  } else {
    $(indicator).css("display", "initial");
    $(indicator).text("Wrong");
  }

  //change question
  quizRunner();
});

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
    var clearCardsEl = document.getElementById('daily');
    clearCardsEl.innerHTML = "";
  }
  return;
});

//attach an event to the fourth button, perform an API call, create cards and output results to the page
$(".show-btn5").click(function () {
  if (clicked5) {
    $(".hide5").show();
    clicked5 = false;
    var apiUrl = "https://api.openbrewerydb.org/breweries?by_city=san_diego";
    var breweryContainer = document.getElementById("breweryContainer");
    //fetch the data from the API
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < 5; i++) {
          var breweryName = data[i].name;
          var breweryUrl = data[i].website_url;
          var newLi = document.createElement("li");
          newLi.classList.add("list-group-item", "list-group-item-action", "list-group-flush");
          newLi.innerHTML +=
            "<a href='" + breweryUrl + "'>" + breweryName + "</a>";
          breweryContainer.append(newLi);
        }
      });
  } else if (!clicked5) {
    $(".hide5").hide();
    console.clear();
    var breweryContainer = document.getElementById("breweryContainer");
    breweryContainer.innerHTML = '';
    clicked5 = true;
  }
  return;
});

//draggable text box
var textArea = $("textarea")
  .draggable({
    cancel: "text",
    start: function () {
      $('#textarea').focus();
    },
    stop: function () {
      $('#textarea').focus();
    }
  })


$('#saveBtn').on('click', function () {
  localStorage.setItem("writtenCode", $('.textCode').val());
});


var textboxInit = function () {

  var savedCode = localStorage.getItem("writtenCode");
  if (savedCode) {
    $(textArea).text(savedCode);
  };
}

textboxInit();

//shows textbox
var clicked = true;

$('#textOpen').on('click', function () {

  if (clicked) {
    $(textArea).css("display", 'initial');
    clicked = !clicked;
  }

  else {
    $(textArea).css("display", 'none');
    clicked = !clicked;
  }
});