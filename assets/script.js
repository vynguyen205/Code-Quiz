var startBtn = document.getElementById('start');
var scoreBtn = document.querySelector('.scoreBtn');

var containerEl = document.getElementById('container'); //container for all questions
var TitleEl = document.querySelector('.question-title'); //title of each questions
var choices = document.querySelector('.answer-choices') //multiple choice
var quizInfo= document.querySelector('.quiz-info'); //quiz rules
var resultPage = document.getElementById('result-page'); //end of the quiz
var answerStatus = document.querySelector('.answer-status'); //correct or wrong
var score = document.getElementById('score');
var submit = document.getElementById('submit');
var initials = document.getElementById('initials')

var currentQuestionIndex = 0;// this is how we can track current question 

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

//What functions when run when start quiz func is called
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

function hideQuestions() {
    containerEl.style.display = 'none';
}

// function showEndPage() {
//     resultPage.style.display = ''
// }

//hide questions page



//need to show question on HTML
function showQuestions(){
    choices.innerHTML = ""; //to clear previous question
    
    var currentQ = myQuestions[currentQuestionIndex]; //displaying current question
    
    TitleEl.textContent = currentQ.question; //assigning current question
    
    var answers = currentQ.answers; // answer choices of current question
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
            choices.append(answerChoices);

            //Checking answers clicked 
            answerChoices.addEventListener("click", function (event) {
                var selectedAnswer = event.target;

                if (selectedAnswer === currentQ.correctAnswer) {
                    answerCorrect();
                    console.log(showQuestions())
                } else {
                    answerWrong();
                }
            
                //go to next Q    
            currentQuestionIndex++;
            showQuestions();
            });


    
    }
}


//if answer correct
function answerCorrect() {
    answerStatus.textContent = "Correct!"
    
}

//if answer wrong
function answerWrong() {
    answerStatus.textContent = "Wrong!"
    

    //subtract 10secs from clock
    counter -=10;
}

// when the timer is over
function gameOver() {
    hideQuestions();
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