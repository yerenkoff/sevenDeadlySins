let startButton = document.querySelector("#startButton");
let modal = document.querySelector("#modal");
let close = document.querySelector("#close");
let resultHeading = document.querySelector("#resultHeading");
let hawk = document.querySelector("#hawk");
var gameStarted = false;
var interval;
var result = 0;
var phrases = [
    "You are the furious Meliodas!",
    "You can be faster! Ban is your hero for now!",
    "You seem very relaxed Fairy King Harlequin!",
    "Why are you so lazy Princess Elizabeth?"
];
var pics = [
    "m2.jpg",
    "b2.jpg",
    "k0.jpg",
    "p0.jpg"
]

startButton.onclick = function() {
    startButton.innerHTML = "Are you ready?";
    clearInterval(interval);
    result = 0;
    gameStarted = false;
    resultHeading.innerHTML = result;
    setTimeout(() => startGame(), 2000);
}

function startGame() {
    var startTime = Date.now();
    gameStarted = true;
    interval = setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        startButton.innerHTML = (elapsedTime / 1000).toFixed(1);
        if (startButton.innerHTML >= 10) {
            clearInterval(interval);
            gameStarted = false;
            startButton.innerHTML = "Click to start!";
            modal.style.display = "block";
            console.log(result);
            // modal.children[1].src = result >= 60 ? console.log(0) : (60 > result >= 45) ? console.log(1) : (45 > result >= 30) ? console.log(2) : console.log(45 > result >= 30);
            modal.children[1].src = result >= 60 ? pics[0] : (60 > result && result >= 45) ? pics[1] : (45 > result && result >= 30) ? pics[2] : pics[3];
            modal.children[2].innerHTML = result >= 60 ? phrases[0] : (60 > result && result >= 45) ? phrases[1] : (45 > result && result >= 30) ? phrases[2] : phrases[3];
        }
    }, 100);
}

hawk.onclick = function() {
    if (gameStarted) {
        result += 1;
        resultHeading.innerHTML = result;
    }
}

close.onclick = function() {
    modal.style.display = "none";
}