//Grab button elements
var startButton = $(".start-button")
var ansButtons = $(".list-group")

//grab quiz components
var quesHolder= $(".question")
var answers = $(".answer")
var indicator= $("#indicator")
var score = 0;

//Quiz object
var quiz = {
    questions: ['Where do you obtain your APIKey','Where in the URL do you start implementing your changes','Why do you need to return as a .json','what is .then'],
    answers: ['Off the website that you are obtaining data on', 'from my github','from your instructor', 'from Google','after.com','the very end','after the ?','after https://','to make it pretty','To manipulate the data into an array','To display changes to the html page','to style it correctly',
    'It is a promise','it is a object','it is a function','it is a variable'],
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
        $(answers[0]).text(quiz.answers[x]);
        console.log(quiz.answers[x])
        $(answers[1]).text(quiz.answers[++x]);
        $(answers[2]).text(quiz.answers[++x]);
        $(answers[3]).text(quiz.answers[++x]);
        i++;
        x++;
        console.log(x)
    }
    else {
        quizOver()
    };
};


//function for end of quiz
var quizOver = function () {

    $(quesHolder).text("Quiz Over! Press Start Button to go through questions again. Your score was " + score)

    localStorage.setItem(".question", score)

    
    //remove ans button
    $(ansButtons).css("display","none");
    
    

    //show start button
    $(startButton).css("display","initial");

    //reset variables
    x = 0;
    i = 0;
    score = 0;

    //reset indicator buttons
    $(indicator).css("display", "none")
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
        score++;
       
        
        
    }
    else {
        $(indicator).css("display", "initial")
        $(indicator).text("Wrong")
    }

    

    

    //change question
    quizRunner();

});
   
