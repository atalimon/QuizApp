// Refs
//document.addEventListener("DOMContentLoaded", () => {
    let catButton = document.getElementById("firstCat");
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
    let mainMenu = document.getElementById("refresh")
    let questionCount;
    let scoreCount = 0;
    let countdown;
    let count = 10;
    let choice;

// Questions and answers array

    const quizArray = [
        [{
            id: "0",
            question: "What is the largest mammal?",
            answer: ['Elephant', 'Whale', 'Giraffe', 'Lion'],
            correct: "Whale"
        },
        {
            id: "1",
            question: "Which gas do plants absorb from the atmosphere?",
            answer: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
            correct: "Carbon Dioxide"
        },
        {
            id: "2",
            question: "What is the chemical symbol for gold?",
            answer: ['Ag', 'Au', 'Gd', 'Go'],
            correct: "Au"
        },
        {
            id: "3",
            question: "What planet is known as the Red Planet?",
            answer: ['Earth', 'Jupiter', 'Mars', 'Venus'],
            correct: "Mars"
        },
        {
            id: "4",
            question: "Which gas is responsible for the ozone layer depletion?",
            answer: ['Methane', 'Carbon Monoxide', 'Chlorofluorocarbons', 'Nitrous Oxide'],
            correct: "Chlorofluorocarbons"
        }],    
    [{id:"0", question:"What is the capital city of Turkmenistan?", answer:['Ashgabat', 'Mary', 'Arkadag', 'Lebap'], correct:"Ashgabat"},
    {id:"1", question:"What is the capital city of Uzbekistan?", answer:['Baghdad', 'Mary', 'Buhara', 'Tashkent'], correct:"Tashkent"},
    {id:"2", question:"What is the capital city of USA?", answer:['New York', 'Mary', 'Washington', 'San Andreas'], correct:"Washington"},
    {id:"3", question:"What is the capital city of Ireland?", answer:['Mary', 'Dublin', 'Jerusalem', 'Macau'], correct:"Dublin"},
    {id:"4", question:"What is the capital city of Japan?", answer:['Kyoto', 'Mary', 'Osaka', 'Tokyo'], correct:"Tokyo"},
    {id:"5", question:"What is the capital city of North Korea?", answer:['Pyongyan', 'Mary', 'Incheon', 'Seoul'], correct:"Pyongyan"},
    {id:"6", question:"What is the capital city of Taiwan?", answer:['Taipei', 'Mary', 'Hong Kong', 'Osaka'], correct:"Taipei"}]];
  
    
   


    restartButton.addEventListener('click', () => {
        initial();
        displayContainer.classList.remove('hide');
        scoreContainer.classList.add('hide')
        questionCounter.innerHTML = 1 + ' of ' + quizArray[choice].length + ' Question';
    });

    mainMenu.addEventListener('click', () => {
        window.location.reload()
    });

    nextButton.addEventListener('click', (displayNext = () => {
        questionCount += 1;
        if (questionCount == quizArray[choice].length) {
            clearInterval(countdown)
            countdown =10;
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove('hide');
            userScore.innerHTML = "Your Score is " + scoreCount + " out of " + questionCount;
        } else {
            questionCounter.innerHTML = questionCount + 1 + ' of ' + quizArray[choice].length + ' Question'
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
        quizArray[choice].sort(()=> Math.random() - 0.5);

        for (let i of quizArray[choice]) {
            i.answer.sort(()=> Math.random() - 0.5);
            let div = document.createElement('div');
            div.classList.add('container-mid');
            questionCount.innerHTML = 1 + " of " + quizArray[choice].length + ' question ';

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

        if (userSolution === quizArray[choice][questionCount].correct) {
            userOption.classList.add('correct');
            scoreCount++;
        } else {
            userOption.classList.add("incorrect");
            answers.forEach((element) => {
                if (element.innerText == quizArray[choice][questionCount].correct) {
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
        console.log(quizArray[choice][2])
        questionContainer.innerHTML = "";
        questionCount = 0;
        scoreCount = 0;
        countdown = 10;
        clearInterval(countdown);
        timerDisplay();
        createQuiz();
        quizDisplay(questionCount);
        
    }  
    
    catButton.addEventListener('click', () => {
        choice = 0;
        questionCounter.innerHTML = 1 + ' of ' + quizArray[choice].length + ' Question';
        startDisplay.classList.add('hide');
        displayContainer.classList.remove('hide');
        initial();
    })

    startButton.addEventListener("click", () => {
        choice = 1;
        questionCounter.innerHTML = 1 + ' of ' + quizArray[choice].length + ' Question';
        startDisplay.classList.add('hide');
        displayContainer.classList.remove('hide');
        initial();
    });

    window.onload = () => {
        startDisplay.classList.remove("hide");
        displayContainer.classList.add("hide");
        scoreContainer.classList.add("hide");
        
    };

//});
