// Refs
document.addEventListener("DOMContentLoaded", () => {
    let startDisplay = document.querySelector(".start-screen");
    let startButton = document.getElementById("start-button");
    let displayContainer = document.querySelector(".display-container");
    let questionCounter = document.querySelector("#number-of-question");
    let timerCountdown = document.querySelector("#time-left");
    let questionContainer = document.querySelector(".container");
    let nextButton = document.querySelector("#nextbutton");
    let scoreContainer = document.querySelector(".score-container");
    let userScore = document.querySelector("#userscore");
    let restartButton = document.getElementById("restartbutton");
    let questionCount;
    let scoreCount = 0;

// Questions and answers array

    const quizArray = [{id:"0", question:"Whats the capital city of Turkmenistan?", answer:['ashgabat', 'Mary', 'Arkadag', 'Lebap'], correct:"ashagabat"},
    {id:"1", question:"Whats the capital city of Uzbekistan?", answer:['Baghdad', 'Mary', 'Buhara', 'Tashkent'], correct:"Tashkent"},
    {id:"2", question:"Whats the capital city of USA?", answer:['New York', 'Mary', 'Washington', 'San Andreas'], correct:"Washington"},
    {id:"3", question:"Whats the capital city of Ireland?", answer:['Mary', 'Dublin', 'Jerusalem', 'Macau'], correct:"Dublin"},
    {id:"4", question:"Whats the capital city of Japan?", answer:['Kyoto', 'Mary', 'Osaka', 'Tokyo'], correct:"Tokyo"},
    {id:"5", question:"Whats the capital city of North Korea?", answer:['Pyongyan', 'Mary', 'Incheon', 'Seoul'], correct:"Pyongyan"},
    {id:"6", question:"Whats the capital city of Taiwan?", answer:['Taipei', 'Mary', 'Hong Kong', 'Osaka'], correct:"Taipei"}];


    const quizDisplay = (questionCount) => {
        let quizCards = document.querySelectorAll('.container-mid');

        quizCards.forEach((card)=> {
            card.classList.add('hide');
        });

        quizCards[questionCount].classList.remove('hide');
    };


    function createQuiz() {
        quizArray.sort(()=> Math.random() - 0.5);

        for (let i of quizArray) {
            i.answer.sort(()=> Math.random() - 0.5);
            let div = document.createElement('div');
            div.classList.add('container-mid');
            questionCount.innerHTML = 1+ " of " + quizArray.length + ' question ';

            let question_div = document.createElement("p");
            question_div.classList.add("question");
            question_div.innerHTML = i.question;
            div.appendChild(question_div)

            div.innerHTML += `<button class="option-div" onclick="checker(this)">${i.answer[0]}</button>
            <button class="option-div" onclick="checker(this)">${i.answer[1]}</button>
            <button class="option-div" onclick="checker(this)">${i.answer[2]}</button>
            <button class="option-div" onclick="checker(this)">${i.answer[3]}</button>
            `;
            questionContainer.appendChild(div);
        }
    }

    function initial() {
        questionContainer.innerHTML = "";
        questionCount = 0;
        scoreCount = 0;
        count = 11;
        createQuiz();
        quizDisplay(questionCount);
    }   

    startButton.addEventListener("click", () => {
        startDisplay.classList.add('hide');
        displayContainer.classList.remove('hide');
        initial();
    });

    window.onload = () => {
        startDisplay.classList.remove("hide");
        displayContainer.classList.add("hide");

    };

});
