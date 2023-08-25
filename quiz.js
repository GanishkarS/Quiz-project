const questions = [
    {
        question: "Which type of JavaScript language is _____",
        answers: [
            { text: "Object-Oriented", correct: true},
            { text: "Object-Based", correct: false},
            { text: "Assembly-language", correct: false},
            { text: "High-level", correct: false}
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        answers: [
            { text: "Alternative to if-else", correct: false},
            { text: "Switch statement", correct: false},
            { text: "If-then-else statement", correct: false},
            { text: "immediate if", correct: true}
        ]
    },
    {
        question: "The 'function' and 'var' are known as:",
        answers: [
            { text: "Keywords", correct: true},
            { text: "Data types", correct: false},
            { text: "Declaration statements", correct: false},
            { text: "Prototypes", correct: false}
        ]
    }, 
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { text: "Global variable", correct: true},
            { text: "The local element", correct: false},
            { text: "The two of the above", correct: false},
            { text: "None of the above", correct: false}
        ]
    }, 
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answers: [
            { text: "Syntax error", correct: false},
            { text: "Missing of semicolons", correct: false},
            { text: "Division by zero", correct: true},
            { text: "Missing of Bracket", correct: false}
        ]
    },
    {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints_______",
        answers: [
            { text: "Prints an exception error", correct: false},
            { text: "Prints an overflow error", correct: false},
            { text: "Displays 'Infinity' ", correct: true},
            { text: "Prints the value as such", correct: false}
        ]
    },
    {
        question: "In JavaScript the x===y statement implies that:",
        answers: [
            { text: "Both x and y are equal in value, type and reference address as well", correct: false},
            { text: "Both are x and y are equal in value only", correct: false},
            { text: "Both are equal in the value and data type", correct: true},
            { text: "Both are not same at all", correct: false}
        ]
    },
    {
        question: "Which one of the following is used for the calling a function or a method in the JavaScript?",
        answers: [
            { text: "Property Access Expression", correct: false},
            { text: "Invocation expression", correct: true},
            { text: "Functional expression", correct: false},
            { text: "Primary expression", correct: false}
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ansButton");
const nextButton = document.getElementById("nextButton");

let currQuesIndex = 0;
let score = 0;

function startQuiz(){
    currQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
        let currQuestion = questions[currQuesIndex];
        let quesNo = currQuesIndex + 1;
        questionElement.innerHTML = quesNo + " " + currQuestion.question;

        currQuestion.answers.forEach(answer=>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
        });
}

function resetState(){
    nextButton.style.accentColor.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currQuesIndex++;
    if(currQuesIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currQuesIndex < questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
});

startQuiz();

