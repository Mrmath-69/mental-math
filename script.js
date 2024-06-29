$(document).ready(function() {
    $("#directions, #nums, #sco, #highSco, #submitButton, #resetButton").hide();

    $('#directionsButton').on('click', function(){
    $("#directions").show();
    });

    $("#gameTimerDisplay, #gameTimer, #A, #Answers").hide();
    var timer;
    var timeLeft = 60;
    var elem = document.getElementById('gameTimerDisplay');
    var score = 0;
    var shownScore = document.getElementById('Score');
    var highScore = 0;
    var shownHighscore = document.getElementById('hScore');
    var shownNum1 = document.getElementById('num1');
    var shownNum2 = document.getElementById('num2');
    function gameOver(){
    elem.innerHTML = 'Time is up!';
    $("#Answers, #submitButton").hide();
    clearInterval(timer);
    if(score > highScore){
        highScore = score
        shownHighscore.innerHTML = highScore;
    }
    }
    function start() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
    }
    function updateTimer(){
    timeLeft--;
    if(timeLeft >= 0){
        elem.innerHTML = timeLeft + ' seconds remaining';
    } else{
        gameOver();
        }
    }

    function startGame(){
    $('#title').html('');
    $("#nums, #sco, #highSco, #submitButton, #resetButton").show();
    $("#gameTimerDisplay, #gameTimer, #A, #Answers").show();
    start();
    game();
    }

    $('#startButton').on('click', function(){
    $("#directions, #directionsButton, #startButton").hide();
    startGame();
    });
    function cNum1(){
    var num1 = Math.floor(Math.random() * 101);
    shownNum1.innerHTML = num1;
    return num1;
    }

    function cNum2(){
    var num2 = Math.floor(Math.random() * 11);
    shownNum2.innerHTML = num2;
    return num2;
    }

    function game(){
    score = 0;
    num1 = cNum1();
    num2 = cNum2();
    var Ebutton = document.getElementById("Answers");
    Ebutton.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  document.getElementById("submitButton").click();
    }
    });
    $('#submitButton').on('click', function(){
        if (Answers.value != num1*num2 && Answers.value != ""){
        score--;
        shownScore.innerHTML = score;
        Answers.value = "";
        }else if(Answers.value == num1*num2 && timeLeft < 10 && Answers.value != ""){
        score += 5;
        shownScore.innerHTML = score;
        Answers.value = "";
        num1 = cNum1();
        num2 = cNum2();
        }else if(num1*num2 == Answers.value && Answers.value != ""){
        score++;
        shownScore.innerHTML = score;
        Answers.value = "";
        num1 = cNum1();
        num2 = cNum2();
        }
        else{
        score = score;
        }
        console.log(score);
    });
    }

    $('#resetButton').on('click', function(){
    gameOver();
    timeLeft = 60;
    score = 0;
    shownScore.innerHTML = score;
    startGame();
    });
});
