let timerVal = 60;
let score = 0;
let hitNum = 0;

function makeBubble() {
  let bubble = "";
  for (let i = 1; i <= 80; i++) {
    let num = Math.floor(Math.random() * 100);
    bubble += `<div class="bubble"> ${num}</div>`;
  }
  document.querySelector("#panelBottom").innerHTML = bubble;

  RandomHitNum();
}

function timer() {
  var timeInterval = setInterval(function () {
    if (timerVal > 0) {
      timerVal--;
      document.querySelector("#timerValue").textContent = timerVal;
    } else {
      clearInterval(timeInterval);
      document.querySelector("#panelBottom").innerHTML = `<h1 class="H1">GameOver---   </h1> <h1 class="H1">Your Score is: ${score}</h1>`;
      
    }
  }, 1000);
}

function RandomHitNum() {
  let bubbles = document.querySelectorAll(".bubble");
  let randomIndex = Math.floor(Math.random() * bubbles.length);

  hitNum =  bubbles[randomIndex].textContent;
  document.querySelector("#HitNum").innerHTML = hitNum;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document
  .querySelector("#panelBottom")
  .addEventListener("click", function (details) {
    if (Number(details.target.textContent) == hitNum) {
      increaseScore();
      RandomHitNum();
      makeBubble();
    }
  });

makeBubble();
RandomHitNum();
timer();
