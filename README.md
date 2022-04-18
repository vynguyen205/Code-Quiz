# Code-Quiz
homework-4

🦾 ABOUT THIS PROJECT

This project is a little more challenging than the prior. The Code Quiz is made from html and javascript only. The Javascript is written from scatch with no guiding Javascript. 


 🖥 HOW TO USE

All you need to have prior to taking this quiz is your basic knowlege of Javascript. These questions are not designed to trick you in any way. 

‼️ Please note. If you get a question wrong, time will be subtracted from your clock. So, answer deligently. (It's actually not that serious.)

Once you are done, write your initials and keep track of your own score. 



//timer and subtract time when asnwered wrong
var timeEl = document.querySelector('timer-sec');
var counter = 30;

var countDown = setInterval(function(){
    counter--;
    timeEl.textContent = counter + 'seconds';
    console.log(countDown);
    // if (counter <= 0){ 
    //     timeEl.textContent = "GAME OVER";
    clearInterval(countDown);
    // }
}, 1000);

//add buttons events here
startBtn.addEventListener("click", countDown())