// DOM Selection of each card
var introCard = document.getElementById("quizIntroCard");
var quizCard = document.getElementById("quizCard");
var resultCard = document.getElementById("resultCard");
var highScoresCard = document.getElementById("highscoreCard");


// DOM SELECTION BUTTONS
var quizStartbtn = document.getElementById("quizStart");

// Intro Card 
// Visibility
quizCard.style.display = "none";
resultCard.style.display = "none";
highScoresCard.style.display = "none";
// Start Button
quizStartbtn.addEventListener("click", function () {
    introCard.style.display = "none";
    quizCard.style.display = "block";
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


function quizStart() {
    var x;
    var index = 0;
    qAndA(index);

    // Answer btn event listeners
    btnA1.addEventListener("click", check);
    btnA2.addEventListener("click", check);
    btnA3.addEventListener("click", check);
    btnA4.addEventListener("click", check);

    // Button display
    function qAndA(index) {
        if(index < quizArr.length){
        question.innerHTML = quizArr[index].q1;
        btnA1.innerHTML = quizArr[index].a1;
        btnA2.innerHTML = quizArr[index].a2;
        btnA3.innerHTML = quizArr[index].a3;
        btnA4.innerHTML = quizArr[index].a4;
        }
        else{
            results();
            
        }
    };

    // Correct anmswer check
    function check(event, x) {
        x = event.currentTarget.getAttribute("data-value");

        if (x == quizArr[index].correct) {
            index++;
            qAndA(index);
            correctWrong.innerHTML = "Correct!";
            setTimeout(function () {
                correctWrong.innerHTML = "";
            }
                , 1000);
        }
        else {
            index++;
            qAndA(index);
            correctWrong.innerHTML = "Wrong!";
            setTimeout(function () {
                correctWrong.innerHTML = "";
            }
                , 1000);

        }
    };
};
    
// Results Card

function results(){
    quizCard.style.display = "none";
    resultCard.style.display = "block";
    
};