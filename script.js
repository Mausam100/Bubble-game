var timer = 60;
var score = 0;
var rn = "";


function increaseScore() {
    score += 10;
    document.querySelector(".scorev").textContent=score;
    
}

function makeBubble() {
  var clutter = " ";

  for (var i = 1; i <= 160; i++) {
    var rd = Math.floor(Math.random() * 10);
    clutter += '<div class="bubble">' + rd + "</div>";
  }

  document.querySelector("#panelbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function() {
        if(timer > 0){
        timer--;
        document.querySelector(".timer").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#panelbtm").innerHTML =`<h1>Game Over</h1>` ;
        }
    }, 1000);
}
function getNewHit() {
     rn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent= rn
}
document.querySelector("#panelbtm").addEventListener("click",function (deta) {
    var clickedNum = Number(deta.target.textContent);
    if (clickedNum === rn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
});

runTimer();
makeBubble();
getNewHit();


