// Refs
document.addEventListener("DOMContentLoaded", () => {
    let startDisplay = document.querySelector(".start-screen");
    let startButton = document.getElementById("start-button");
    let displayContainer = document.querySelector(".display-container");
    let questionCounter = document.querySelector("#number-of-question");
    let timerCountdown = document.querySelector("#time-left");
    let questionContainer = document.querySelector(".container");
    let nextButton = document.querySelector("#next-button");
    let scoreContainer = document.querySelector(".score-container");
    let userScore = document.querySelector("#userscore");
    let restartButton = document.getElementById("restartbutton");
    let questionCount;
    let scoreCount = 0;
    let countdown;
    let count = 10;

// Questions and answers array

    const quizArray = [{id:"0", question:"Whats the capital city of Turkmenistan?", answer:['ashgabat', 'Mary', 'Arkadag', 'Lebap'], correct:"ashgabat"},
    {id:"1", question:"Whats the capital city of Uzbekistan?", answer:['Baghdad', 'Mary', 'Buhara', 'Tashkent'], correct:"Tashkent"},
    {id:"2", question:"Whats the capital city of USA?", answer:['New York', 'Mary', 'Washington', 'San Andreas'], correct:"Washington"},
    {id:"3", question:"Whats the capital city of Ireland?", answer:['Mary', 'Dublin', 'Jerusalem', 'Macau'], correct:"Dublin"},
    {id:"4", question:"Whats the capital city of Japan?", answer:['Kyoto', 'Mary', 'Osaka', 'Tokyo'], correct:"Tokyo"},
    {id:"5", question:"Whats the capital city of North Korea?", answer:['Pyongyan', 'Mary', 'Incheon', 'Seoul'], correct:"Pyongyan"},
    {id:"6", question:"Whats the capital city of Taiwan?", answer:['Taipei', 'Mary', 'Hong Kong', 'Osaka'], correct:"Taipei"}];
  


    restartButton.addEventListener('click', () => {
        initial();
        displayContainer.classList.add('hide');
        scoreContainer.classList.add('hide')
    });

    nextButton.addEventListener('click', (displayNext = () => {
        questionCount += 1;
        if (questionCount == quizArray.length) {
            displayContainer.classList.add("hide");
            scoreContainer.classList.add('hide');
            userScore.innerHTML = "Your Score is " + scoreCount + " out of " + questionCount;
        } else {
            questionCounter.innerHTML = questionCount + 1 + ' of ' + quizArray.length + ' Question'
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown)
            timerDisplay();
        }
    })
    )
    
    const timerDisplay = () => {
        countdown = setInterval(() => {
            count--;
            timerCountdown.innerHTML = `${count}s`;
            if(count == 0){
                clearInterval(countdown);
                displayNext();
            }
        },1000);
    };

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

    function checker(userOption) {
        let userSolution = userOption.innerText;
        let question = document.getElementsByClassName('container-mid')[questionCount];
        let answers = question.querySelectorAll('.option-div');

        if (userSolution === quizArray[questionCount].correct) {
            userOption.classList.add('correct');
            scoreCount++;
        } else {
            userOption.classList.add("incorrect");
            answers.forEach((element) => {
                if (element.innerText == quizArray[questionCount].correct) {
                    element.classList.add('correct')
                }
            });
        }

        clearInterval(countdown)
        answers.forEach((element) => {
            element.disabled = true;
        })
    }

    function initial() {
        questionContainer.innerHTML = "";
        questionCount = 0;
        scoreCount = 0;
        countdown = 11;
        clearInterval(countdown);
        timerDisplay();
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
