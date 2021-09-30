//Grab button elements
var startButton = $(".start-button")
var ansButtons = $(".list-group")

//grab quiz components
var quesHolder= $(".question")
var answers = $(".answer")
var indicator= $("#indicator")

//Quiz object
var quiz = {
    questions: ["first","second","third"],
    answers: ["one","two","three","four","one","two","three","four","one","two","three","four"],
    correctAns:["one","two","four"],
}

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
