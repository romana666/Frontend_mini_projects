let score = 0;
let time = 30;
let gameRunning = false;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const target = document.getElementById("target");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");


startBtn.addEventListener("click", startGame);


function startGame() {

    score = 0;
    time = 30;
    gameRunning = true;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    target.style.display = "block";
    message.textContent = "Click the target!";

    moveTarget();

    startBtn.disabled = true;

    const timer = setInterval(function() {

        time--;

        timeDisplay.textContent = time;

        if (time <= 0) {

            clearInterval(timer);

            gameRunning = false;

            target.style.display = "none";

            message.textContent = "Game Over! Your score is " + score;

            startBtn.disabled = false;
        }

    }, 1000);
}


target.addEventListener("click", function() {

    if (!gameRunning) {
        return;
    }

    score++;

    scoreDisplay.textContent = score;

    moveTarget();
});


function moveTarget() {

    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}