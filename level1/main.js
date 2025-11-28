const input = document.getElementById('answer-input');
const questionDisplay = document.getElementById('question-display')
const closeInstruction = document.getElementById('close-instruction')
const instruction = document.getElementById('instruction')
const progressBar = document.getElementById('progress-bar')
const returnButton = document.getElementById('return')
const winningScreen = document.getElementById('winning-screen')

let answer = ""
let currentQuestionIndex
let correct = 0

const questions = [
    {
        question: "Words in a book",
        image: "",
        answer: "string"
    },
    {
        question: "Scores in a test",
        image: "",
        answer: "int"
    },
    {
        question: "A light switch that can be turned on and off",
        image: "",
        answer: "bool",
    },
    {
        question: "Amount of water in a glass",
        image: "",
        answer: "int",
    },
    {
        question: "The text in billboards",
        image: "",
        answer: "string",
    },
    {
        question: "A door with a lock",
        image: "",
        answer: "bool",
    },
    {
        question: "The height of a person",
        image: "",
        answer: "int",
    },
    {
        question: "A person's name",
        image: "",
        answer: "string",
    },
    {
        question: "Nationality of a person",
        image: "",
        answer: "string",
    },
    {
        question: "The age of a person",
        image: "",
        answer: "int",
    },
]

let availableQuestions = Array.from(questions)
let answeredQuestions = {}

function randomQuestion() {
    if (availableQuestions.length == 0) {
        winningScreen.style.opacity = 1;
        winningScreen.style.pointerEvents = "auto";
        return
    }
    let index = Math.round(Math.random() * (availableQuestions.length - 1))
    questionDisplay.innerText = `Question ${(questions.length - availableQuestions.length) + 1}: ${availableQuestions[index].question}`
    answer = availableQuestions[index].answer

    currentQuestionIndex = index    
}

closeInstruction.addEventListener('click', function(){
    instruction.style.pointerEvents = "none";
    instruction.style.opacity = 0
})

returnButton.addEventListener('click', function(){
    window.location.href = "../levelsPage.html";
})

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const text = input.value.trim();  
        
        if (text == answer) {
            correct++
            progressBar.value = (correct / questions.length) * 100
            input.style.backgroundColor = "greenyellow";
            input.style.borderColor = "rgb(21, 210, 21)"
            setTimeout(() => {
                 input.style.backgroundColor = "white";
                 input.style.borderColor = "black"
            }, 250);
            
            availableQuestions.splice(currentQuestionIndex, 1)
            randomQuestion()
        } else {
            input.style.backgroundColor = "red";
            input.style.borderColor = "rgba(172, 0, 0, 1)"
            setTimeout(() => {
                 input.style.backgroundColor = "white";
                 input.style.borderColor = "black"
            }, 250);
        }
        input.value = ""
    }
});

randomQuestion()

