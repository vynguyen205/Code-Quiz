var startBtn = document.getElementById('start');
var scoreBtn = document.querySelector('.scoreBtn');

var q1 = document.getElementById('show-question');
var choices = document.querySelector('.answer-choices')
var quizInfo= document.querySelector('.quiz-info');
var resultPage = document.getElementById('result-page');
var answerStatus = document.querySelector('.answer-status');

var currentQuestionIndex= 0;// this is how we can track current question 

//Questions for the quiz
var myQuestions = [
    {
       question: "Which one of these is a data type that we learned in class?",
       answers: [
           "a: rope",
           "b: string",
           "c: integer",
       ],
       correctAnswer: "b: string"
    },
    {
       question: "Everything in Javascipt is a(n)...",
       answers: [
           "a: funtion",
           "b: element",
           "c: object",
       ],
       correctAnswer: "c: object"
    },
    {
       question: "What do you need to do to a delcared function for it to work?",
       answers: [
           "a: return it",
           "b: call it",
           "c: console.log",
       ],
       correctAnswer: "b: call it"
    },      
   
   ];

//StartQuiz
function startQuiz () {

    hideHome();
    startTimer();
    showQuestions();
    
}

//hide home page
function hideHome() {
    startBtn.style.display = 'none';
    quizInfo.style.display = 'none';
}

//hide questions page



//need to show question on HTML
function showQuestions(){
    q1.innerHTML = ""; //to clear previous question
    
    var q = myQuestions[currentQuestionIndex]; 
    var qTitleEl= document.createElement("h1");
        qTitleEl.textContent = q.question; // Updating title
        qTitleEl.style.cssText = `
        margin: 5rem 10rem 2.5rem 5rem
        `;
        q1.append(qTitleEl); // this will put the question on the HTML page
    
    
    var answers = q.answers; // answer choices of current question
    
    for (var i = 0; i < answers.length; i++) {
        
        var answer = answers[i]; //loop through EACH answer choices in the answer array
        
        var answerChoices = document.createElement('button');
            answerChoices.textContent = answer;
            answerChoices.style.cssText = `
            display: flex;
            margin: 0 0 15px 5rem;
            padding: 9px;
            font-size: 17px;
            `;
            q1.append(answerChoices);

            answerChoices.addEventListener("click", function handleClick(event) {
                var selectedAnswer = event.target;

                if (selectedAnswer !== q.correctAnswer) {
                    answerWrong();

                }
            });

        // currentQuestionIndex++;
        // showQuestions();
    }
}


           
//if answer correct
function answerCorrect() {
    answerStatus = "";
    setTimeout (function() {
        answerStatus.textContent = "Correct!"   
    },1000);
}

//if answer wrong
function answerWrong() {
    answerStatus = "";
    setTimeout (function() {
        answerStatus.textContent = "Wrong!"
    },1000);
    //subtract time from clock
    counter -= 10;
}

// when the timer is over
function gameOver() {
    var endPgTitle = document.createElement('h1');
    endPgTitle.textcontent = 'SCOREBOARD';
    resultPage.append(endPgTitle);

    var endText = document.createElement('h3');
    endText.textContent = 'YOUR CURRENT SCORE IS: ';
    resultPage.append(endText);

}


//timer and subtract time when asnwered wrong
var timeEl = document.querySelector('.count-down');
var counter = 30; // change this later

var countDown; 

function startTimer () {
    countDown = setInterval(function(){
        counter--;
        timeEl.textContent = 'Time left: ' + counter + ' S';
        if (counter <= 0){ 
            timeEl.textContent = "GAME OVER";
            clearInterval(countDown);
            gameOver();
        }

    }, 1000);
}
//add buttons events here
startBtn.addEventListener("click", startQuiz);
// scoreBtn.addEventListener("click", blahblah);