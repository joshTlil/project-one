//Grab button elements
var startButton = $(".start-button");
var ansButtons = $(".list-group");

//grab quiz components
var quesHolder = $(".question");
var answers = $(".answer");
var indicator = $("#indicator");

//Quiz object
var quiz = {
  questions: [
    "Where do you obtain your APIKey",
    "Where in the URL do you start implementing your changes",
    "Why do you need to return as a .json",
    "what is .then",
  ],
  answers: [
    "Off the website that you are obtaining data on",
    "from my github",
    "from your instructor",
    "from Google",
    "after.com",
    "the very end",
    "It means next",
    "after https://",
    "to make it pretty",
    "To manipulate the data into an array",
    "To display changes to the html page",
    "to style it correctly",
    "It is a promise",
    "it is a object",
    "it is a function",
    "it is a variable",
  ],
  correctAns: [
    "Off the website that you are obtaining data on",
    "after the ?",
    "To manipulate the data into an array",
    "It is a promise",
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
    console.log(quiz.answers[x]);
    $(answers[1]).text(quiz.answers[++x]);
    $(answers[2]).text(quiz.answers[++x]);
    $(answers[3]).text(quiz.answers[++x]);
    i++;
    x++;
    console.log(x);
  } else {
    quizOver();
  }
};

//function for end of quiz
var quizOver = function () {
  $(quesHolder).text(
    "Quiz Over! Press Start Button to go through questions again."
  );

  //remove ans button
  $(ansButtons).css("display", "none");

  //show start button
  $(startButton).css("display", "initial");

  //reset variables
  x = 0;
  i = 0;

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
  } else {
    $(indicator).css("display", "initial");
    $(indicator).text("Wrong");
  }

  //change question
  quizRunner();
});
var clicked5 = true;
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
