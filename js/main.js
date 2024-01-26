const questions = [
    {
        question: "What is the order of the Avatar cycle?",
        answers: [
            { text: "Water, Earth, Fire, Air", correct: false },
            { text: "Water, Earth, Air, Fire", correct: false },
            { text: "Fire, Water, Earth, Air", correct: false },
            { text: "Water, Earth, Fire, Air", correct: true }
        ]
    },
    {
        question: "Who was the Avatar before Aang?",
        answers: [
            { text: "Korra", correct: false },
            { text: "Roku", correct: true },
            { text: "Kyoshi", correct: false },
            { text: "Yangchen", correct: false }
        ]
    },
    {
        question: "Who said the following quote: 'That's rough, buddy.'",
        answers: [
            { text: "Sokka", correct: false },
            { text: "Zuko", correct: true },
            { text: "Katara", correct: false },
            { text: "Toph", correct: false }
        ]
    },
    {
        question: "Which of the following characters is NOT a bender?",
        answers: [
            { text: "Ty Lee", correct: true },
            { text: "Admiral Zhao", correct: false },
            { text: "Long Feng", correct: false },
            { text: "Iroh", correct: false }
        ]
    },
    {
        question: "Which ancient dragons do the Sun Warriors revere as the original firebending masters?",
        answers: [
            { text: "Roku and Sozin", correct: false },
            { text: "Tui and La", correct: false },
            { text: "Yin and Yang", correct: false },
            { text: "Ran and Shaw", correct: true }
        ]
    },
    {
        question: "Which spirit is known as The Face Stealer?",
        answers: [
            { text: "Koh", correct: true },
            { text: "Hei Bai", correct: false },
            { text: "Wan Shi Tong", correct: false },
            { text: "Vaatu", correct: false }
        ]
    },
    {
        question: "Who is the leader of the Freedom Fighters?",
        answers: [
            { text: "Pipsqueak", correct: false },
            { text: "Longshot", correct: false },
            { text: "Jet", correct: true },
            { text: "The Duke", correct: false },
        ]
    },
    {
        question: "What is the name of the library that Wan Shi Tong guards?",
        answers: [
            { text: "The Spirit Library", correct: false },
            { text: "The Spirit World Library", correct: false },
            { text: "The Spirit Library of Knowledge", correct: true },
            { text: "The Spirit World Archives", correct: false },
        ]
    },
    {
        question: "Who is not a member of the Order of the White Lotus?",
        answers: [
            { text: "Long Feng", correct: true },
            { text: "Iroh", correct: false },
            { text: "Bumi", correct: false },
            { text: "Jeong Jeong", correct: false }
        ]
    },
    {
        question: "What spirit does Katara disguise herself as in order to help a Fire Nation village?",
        answers: [
            { text: "Raava", correct: false },
            { text: "The Painted Lady", correct: true },
            { text: "The Mother of Faces", correct: false },
            { text: "Lady Tienhai", correct: false }
        ]
    }
];


const questionBackgrounds = [
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25mm93FCSKp2KYzr9j7T9P5r0W8pAwCgu-g&usqp=CAU')",
    "url('https://wallpapers.com/images/featured/avatar-aang-8x73wwvp9qx11vtq.jpg')",
    "url('https://preview.redd.it/vjmsv9qjzlr71.png?width=640&crop=smart&auto=webp&s=ac961384affd172cd9cd490df891b6b0534914a3')",
    "url('https://sportshub.cbsistatic.com/i/2021/03/18/52d7b3d6-27cb-48a8-a9de-4780886c3858/avatar-the-last-airbender-ty-lee-beach-cosplay-best-anime-girls-1236012.jpg?width=1200')",
    "url('https://i.pinimg.com/originals/69/aa/96/69aa968fa99b9758a9e774955d0240f7.jpg')",
    "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2cea906-3ab9-4872-aa64-84604b1cf702/d4ef52g-2f6d4eef-5c82-4446-82c9-200551903d42.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyY2VhOTA2LTNhYjktNDg3Mi1hYTY0LTg0NjA0YjFjZjcwMlwvZDRlZjUyZy0yZjZkNGVlZi01YzgyLTQ0NDYtODJjOS0yMDA1NTE5MDNkNDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1qub2q_M7o_mrCAl2vcZG3HGogunvzre70W3Le-POaw')",
    "url('https://i.pinimg.com/564x/79/9d/08/799d08e186213d50a7214bab439837c8.jpg')",
    "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea914385-70d7-476d-aa3b-37d0c449c464/de18eof-62abaca6-6a12-452e-a20a-a8b03e2ab91d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VhOTE0Mzg1LTcwZDctNDc2ZC1hYTNiLTM3ZDBjNDQ5YzQ2NFwvZGUxOGVvZi02MmFiYWNhNi02YTEyLTQ1MmUtYTIwYS1hOGIwM2UyYWI5MWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R7o3bmz1A6QMB_E47qXE-OK3A9wEZcSI9vZ3kz-S_XI')",
    "url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/avatar-order-of-the-white-lotus.jpg')",
    "url('https://analyzingtv.files.wordpress.com/2016/03/pl11.jpg')"
]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    document.body.style.backgroundImage = questionBackgrounds[currentQuestionIndex];

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();