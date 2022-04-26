function showScore() {
    var playerInfo = JSON.parse(localStorage.getItem("playerScore")) || [];

    //score from high to lowest
    playerInfo.sort (function (a,b) {
        return b-a;
    });

    var info = playerInfo.length;
    for(var i = 0; i < info; i++) {
        var liTag = playerInfo[i];

        var li = document.createElement("li");
        li.textContent = liTag;
    
        var liParent = document.querySelector(".score-input");
        liParent.appendChild(li);
    };

} 



function clearStorage() {

    var clear = document.querySelector(".clear-scores");
    
    clear.addEventListener("click", function() {
        localStorage.removeItem("playerInfo");
        location.reload();
    })
}

showScore();