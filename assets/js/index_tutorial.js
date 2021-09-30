//Grab button elements
var startButton = $(".start-button")
var ansButtons = $(".list-group")

//grab quiz components
var quesHolder= $(".question")
var answers = $(".answer")
var indicator= $("#indicator")

//Quiz object
var quiz = {
    questions: ['Where do you obtain your APIKey','Where in the URL do you start implementing your changes','Why do you need to return as a .json'],

    answers: ['Off the website that you are obtaining data on', 'after the ?','To manipulate the data into an array','It is an array','from my github','after.com','Off the website that you are obtaining data on','after the ?','To manipulate the data into an array','It is a promise'],
    correctAns:['Off the website that you are obtaining data on','after the ?','To manipulate the data into an array','It is a promise'],
}
console.log(quiz)

//start button event listener
startButton.on("click", function() {

    //remove start button
    $(startButton).css("display","none");

    //show ans button
    $(ansButtons).css("display","initial");

    //show quiz content
    quizRunner();   
});

//function to change questions
var x = 0;
var i = 0;
var quizRunner= function () {
     
    if (i<quiz.questions.length) {

        //change question
        $(quesHolder).text(quiz.questions[i]);

        //change answers
        $(answers[x]).text(quiz.answers[x]);
        $(answers[++x]).text(quiz.answers[x]);
        $(answers[++x]).text(quiz.answers[x]);
        $(answers[++x]).text(quiz.answers[x]);
        i++;
        x++;
    }
    else {
        quizOver()
    };
};


//function for end of quiz
var quizOver = function () {

    $(quesHolder).text("Quiz Over! Press Start Button to go through questions again.")
    
    //remove ans button
    $(ansButtons).css("display","none");
    
    //reset indicator buttons
    $(indicator).css("display", "none")

    //show start button
    $(startButton).css("display","initial");

    //reset variables
    x = 0;
    i = 0;
}

//answer button event listner
ansButtons.on("click",function(event) {
    
    //grabs answer text from button clicked
    var buttonClicked = event.target;
    var ans = $(buttonClicked).text();

    //checks if answer is wrong or right
    if (quiz.correctAns[(i-1)] ==ans) {
        $(indicator).css("display", "initial")
        $(indicator).text("Correct")
    }
    else {
        $(indicator).css("display", "initial")
        $(indicator).text("Wrong")
    }

    //change question
    quizRunner();

});
   
