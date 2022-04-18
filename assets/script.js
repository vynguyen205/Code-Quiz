var startBtn = document.getElementById('start');
var scoreBtn = document.querySelector('.scoreBtn');

var q1 = document.getElementById('show-question');
var quizInfo= document.querySelector('.quiz-info')

var currentQuestionIndex= 0

//Questions for the quiz
var myQuestions = [
    {
       question: "Which one of these is a data type that we learned in class?",
       answers: {
           a: "rope",
           b: "string",
           c: "integer",
       },
       correctAnswer: "b"
    },
    {
       question: "Everything in Javascipt is a(n)...",
       answers: {
           a: "funtion",
           b: "element",
           c: "object",
       },
       correctAnswer: "c"
    },
    {
       question: "What do you need to do to a delcared function for it to work?",
       answers: {
           a: "retun it",
           b: "call it",
           c: "console.log",
       },
       correctAnswer: "b"
    },      
   
   ];

//StartQuiz
function startQuiz () {
    startBtn.style.display = 'none';
    quizInfo.style.display = 'none';

    showQuestions();
    
    startTimer();
    
}
//need to show question on HTML
function showQuestions(){
    q1.innerHTML = ""; //need to clear previous question
    var q = myQuestions[currentQuestionIndex]; // this is how we can track current question 
    var qTitleEl= document.createElement("h1");
    qTitleEl.textContent= q.question; // assign the question to the h1 tag we just created
    q1.append(qTitleEl); // this will put the question on the HTML page
   
    // show answers and put it on page
    var answers = q.answers // easier to access answers above
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i]; //loop through each answers in the answer array
        var button = document.createElement('button');
        button.textContent = answer;
        q1.append(button);
        // button.addEventListener("click", function(event) {
        //     var selectedAnswer = event.target.textContent
        //     alert("YOU CHOSE " + selectedAnswer);
            
        //     if (selectedAnswer === q.correctAnswer) {
        //         answerCorrect();
        //     }else {
        //         answerWrong();
        //     }

        //     //go to next question
        //     currentQuestionIndex++;
        //     showQuestions();
        // })
    }
}



//if answer correct
function answerCorrect() {
    var displayStatus = document.createElement("div");
    displayStatus.textContent = "Correct";
    q1.append(displayStatus);
    return
}


//if answer wrong
function answerWrong() {
    var displayStatus = document.createElement("div");
    displayStatus.textContent = "Wrong";
    q1.append(displayStatus);
    
    //subtract time from clock
    counter -= 10;
}

//timer and subtract time when asnwered wrong
var timeEl = document.querySelector('.count-down');
var counter = 30; // change this later

var countDown; 

function startTimer () {
    countDown = setInterval(function(){
        counter--;
        timeEl.textContent = 'Time left: ' + counter + ' s';
        if (counter <= 0){ 
            timeEl.textContent = "GAME OVER";
        clearInterval(countDown);
        }
    }, 1000);
}
//add buttons events here
startBtn.addEventListener("click", startQuiz);  