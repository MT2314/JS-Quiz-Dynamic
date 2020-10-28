// DOM Selection of each card
var introCard = document.getElementById("quizIntroCard");
var quizCard = document.getElementById("quizCard");
var resultCard = document.getElementById("resultCard");
var highScoresCard = document.getElementById("highscoreCard");
var highScoreList = document.getElementById("highscoreList");
var clearHS = document.getElementById("clearHS");
var goHigh = document.getElementById("goHigh");
var goBack = document.getElementById("goBack");
var finalScore = document.getElementById('finalScore');
var submitBtn = document.getElementById('submitBtn');
var userNameInput = document.getElementById("userName");
var timerEl = document.getElementById("timer");
var quizStartbtn = document.getElementById("quizStart");

// Intro Card 
// Visibility
quizCard.style.display = "none";
resultCard.style.display = "none";
highScoresCard.style.display = "none";
// Start Button
var index;
var quizProgress;
quizStartbtn.addEventListener("click", function () {
    introCard.style.display = "none";
    quizCard.style.display = "block";
    index = 0;
    quizProgress = true;
    setTime();
    quizStart();

});

// Quiz


// DOM Selection Answer Buttons
var question = document.getElementById("question");
var btnA1 = document.getElementById("btnA1");
var btnA2 = document.getElementById("btnA2");
var btnA3 = document.getElementById("btnA3");
var btnA4 = document.getElementById("btnA4");
var correctWrong = document.getElementById("correctWrong");

// Q & A Array
var quizArr = [
    {
        q1:
            "Difference between “==” and “===” ?",
        a1:
            "They are the same",
        a2:
            "==Compares values and === compares types ",
        a3:
            "==Compares only values and === compares both ther values and types ",
        a4:
            "=== does not exist",
        correct:
            3,


    },

    {

        q1:
            "Which of the following is not a valid JavaScript variable name?",
        a1:
            "2names",
        a2:
            "_first_and_last_names",
        a3:
            "FirstAndLast",
        a4:
            "None of the above",
        correct:
            1,
    },
    {

        q1:
            "What are variables used for in JavaScript Programs?",
        a1:
            "Storing numbers, dates, or other values",
        a2:
            "Varying randomly",
        a3:
            "Causing high-school algebra flashbacks",
        a4:
            "None of the above",
        correct:
            1,
    },

    {

        q1:
            "Inside which HTML element do we put the JavaScript?",
        a1:
            "&lt;js&gt;",
        a2:
            "&lt;script&gt;",
        a3:
            "&lt;scripting&gt;",
        a4:
            "&lt;javascript&gt;",
        correct:
            2,
    },

    {

        q1:
            "How do you write \"Hello World\" in an alert box?",
        a1:
            "alertBox(\"Hello World\")",
        a2:
            "msgBox(\"Hello World\")",
        a3:
            "msg(\"Hello World\")",
        a4:
            "alert(\"Hello World\")",
        correct:
            4,
    },
];

// Time Display
var secondsLeft;
var arrayDone = false;

function setTime() {
    secondsLeft = quizArr.length * 15;

    if(quizProgress == true){
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft == 0 || arrayDone == true) {
            clearInterval(timerInterval);
            results();
            timerEl.textContent = "Time: " + secondsLeft;
        }
        else if (quizProgress == false){
            clearInterval(timerInterval);
        }

    }, 1000);
};
};



//Quiz Start 

function quizStart() {
    qAndA(index);
    // Answer btn event listeners
    btnA1.addEventListener("click", check);
    btnA2.addEventListener("click", check);
    btnA3.addEventListener("click", check);
    btnA4.addEventListener("click", check);
};


// Button display
var final;
function qAndA(index) {
    if (index < quizArr.length) {
        question.innerHTML = quizArr[index].q1;
        btnA1.innerHTML = quizArr[index].a1;
        btnA2.innerHTML = quizArr[index].a2;
        btnA3.innerHTML = quizArr[index].a3;
        btnA4.innerHTML = quizArr[index].a4;
    }
    else {
        arrayDone = true;
        final = secondsLeft;
        results();
    }

};


// Correct anmswer check
var x;
function check(event, x) {

    x = event.currentTarget.getAttribute("data-value");
    console.log(index);

    if (x == quizArr[index].correct) {
        correctWrong.innerHTML = "Correct!";
        setTimeout(function () {
            correctWrong.innerHTML = "";
        }
            , 1000);
    }
    else {
        secondsLeft -= 10;
        correctWrong.innerHTML = "Wrong!";
        setTimeout(function () {
            correctWrong.innerHTML = "";
        }
            , 1000);

    };
    index++;
    qAndA(index);
};


// Results Card
var userName;
function results() {
    quizCard.style.display = "none";
    timerEl.style.display = "none";
    finalScore.innerHTML = "Your final score is " + final;
    resultCard.style.display = "block";

};

// Submit Button
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    userName = userNameInput.value;
    if (userName == "") {
        alert("Must Enter Initial")

    }
    else {
        resultCard.style.display = "none";
        highScoresCard.style.display = "block";
        localStorage.setItem(userName, final);
        console.log(localStorage.key(1));
        loadHR();
    };
});


// HighScore Card
//

// Load High Scores from Storage
function loadHR() {
    var key;
    var value;
    var node;
    var textnode;
    removeAllChildNodes(highScoreList);
    for (var i = 0, len = localStorage.length; i < len; i++) {
        key = localStorage.key(i);
        value = localStorage[key];
        node = document.createElement("li");
        textnode = document.createTextNode(key + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + value);
        node.appendChild(textnode);
        highScoreList.appendChild(node);

    };
};

// Highscore Link in Navbar
goHigh.addEventListener("click", function () {
    resultCard.style.display = "none";
    quizCard.style.display = "none";
    introCard.style.display = "none";
    highScoresCard.style.display = "block";
    timerEl.style.display = "none";
    quizProgress = false;
});


// Go Back Button
goBack.addEventListener("click", function () {
    highScoresCard.style.display = "none";
    introCard.style.display = "block";
    timerEl.textContent = "Time: 0";
    timerEl.style.display = "block";
    arrayDone = false;
});

// Remove ChildNodes Function
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

// Clear HighScore
clearHS.addEventListener("click", function () {
    localStorage.clear();
    removeAllChildNodes(highScoreList);

});