var startBtn = document.getElementById('start');


//Questions for the quiz
var myQuestions = [
 {
    question1: "Which one of these is a data type that we learned in class?",
    answers: {
        a: "rope",
        b: "string",
        c: "integer",
    },
    correctAnswer: "b"
 },
 {
    question1: "Everything in Javascipt is a(n)...",
    answers: {
        a: "funtion",
        b: "element",
        c: "object",
    },
    correctAnswer: "c"
 },
 {
    question1: "What do you need to do to a delcared function for it to work?",
    answers: {
        a: "retun it",
        b: "call it",
        c: "console.log",
    },
    correctAnswer: "b"
 },      

];

//how to display the question on the page

function showQuestion(q) {
}

if (myQuestions) {
    (question1 === "b")
    
}

showQuestion(myQuestions);

//add buttons events here
startBtn.addEventListener("click", showQuestion())

//submit button for the quiz and jump to next question

//a pop up for when the answer is correct or wrong

//timer and subtract time when asnwered wrong

//be able to save intials and store in localstorage