const questions = [
    {
        question: "What is the order of the Avatar cycle?",
        answers: [
            { text: "Air, Water, Fire, Earth", correct: false, comment: "The correct order is Water, Earth, Fire, Air." },
            { text: "Water, Earth, Air, Fire", correct: false, comment: "The correct order is Water, Earth, Fire, Air." },
            { text: "Fire, Water, Earth, Air", correct: false, comment: "The correct order is Water, Earth, Fire, Air." },
            { text: "Water, Earth, Fire, Air", correct: true, comment: "&#128079; You got it! The correct order is Water, Earth, Fire, Air" }
        ]
    },
    {
        question: "Who was the Avatar before Aang?",
        answers: [
            { text: "Korra", correct: false, comment: "Korra was the Avatar AFTER Aang." },
            { text: "Roku", correct: true, comment: "&#128079; You got it! Roku was the Avatar before Aang. He died right before Sozin used the comet to wipe out the Air Nomads" },
            { text: "Kyoshi", correct: false, comment: "Kyoshi was of the Earth Kingdom and the Avatar before Roku" },
            { text: "Yangchen", correct: false, comment: "Yangchen was an Air Nomad, the Avatar before Kuruk of the water nation" }
        ]
    },
    {
        question: "Who said the following quote: 'That's rough, buddy.'",
        answers: [
            { text: "Sokka", correct: false, comment: "Sokka was pretty witty and savage, but not quite the answer" },
            { text: "Zuko", correct: true, comment: "&#128079; You got it! Zuko said this to Sokka after Sokka said that his first girlfriend turned into the Moon" },
            { text: "Katara", correct: false, comment: "Katara was a very caring and nurturing character, not quite the answer" },
            { text: "Toph", correct: false, comment: "Toph was a very blunt and straightforward character, but not quite the answer" }
        ]
    },
    {
        question: "Which of the following characters is NOT a bender?",
        answers: [
            { text: "Ty Lee", correct: true, comment: "&#128079; You got it! Ty Lee is a non-bender, but she is a very skilled acrobat and chi blocker" },
            { text: "Admiral Zhao", correct: false, comment: "Admiral Zhao is a firebender (and a really awful one)" },
            { text: "Long Feng", correct: false, comment: "Long Feng is a powerful earthbender and leader of the Dai Li, though he's more skilled at manipulation" },
            { text: "Iroh", correct: false, comment: "Iroh is a perhaps the most powerful firebender, nicknamed The Dragon of The West" }
        ]
    },
    {
        question: "Which ancient dragons do the Sun Warriors revere as the original firebending masters?",
        answers: [
            { text: "Roku and Sozin", correct: false, comment: "Roku and Sozin were really close like brothers and became the Avatar and the firelord respectively, but were not the original firebending masters" },
            { text: "Tui and La", correct: false, comment: "Tui and La are the Ocean and the Moon spirits connected to Water bending" },
            { text: "Yin and Yang", correct: false, comment: "Yin and Yang are the balance of the universe, not the original firebending masters" },
            { text: "Ran and Shaw", correct: true, comment: "&#128079; You got it! Ran and Shaw are the original firebending masters and the last two dragons in existence" }
        ]
    },
    {
        question: "Which spirit is known as The Face Stealer?",
        answers: [
            { text: "Koh", correct: true, comment: "&#128079; You got it! Koh is a spirit that steals the faces of those who show emotion" },
            { text: "Hei Bai", correct: false, comment: "Hei Bai is a forest spirit that turns into a monstrous panda when angered" },
            { text: "Wan Shi Tong", correct: false, comment: "Wan Shi Tong is the spirit of knowledge and guards the Spirit Library. Quite scary! Yikes!" },
            { text: "Vaatu", correct: false, comment: "Vaatu is the spirit of chaos and darkness, the opposite of Raava. Appears in the legend of Korra" }
        ]
    },
    {
        question: "Who is the leader of the Freedom Fighters?",
        answers: [
            { text: "Pipsqueak", correct: false, comment: "Pipsqueak is the biggest, burliest member of the Freedom Fighters, but not the leader" },
            { text: "Longshot", correct: false, comment: "Longshot is the silent archer of the Freedom Fighters, but not the leader" },
            { text: "Jet", correct: true, comment: "&#128079; You got it! Jet is the leader of the Freedom Fighters and a very skilled swordsman" },
            { text: "The Duke", correct: false, comment: "The Duke is the youngest member of the Freedom Fighters, but not the leader" },
        ]
    },
    {
        question: "What is the name of the library that Wan Shi Tong guards?",
        answers: [
            { text: "The Spirit Library", correct: false, comment: "The Spirit Library is not the correct name of the library"},
            { text: "The Spirit World Library", correct: false, comment: "The Spirit World Library is not the correct name of the library"},
            { text: "The Spirit Library of Knowledge", correct: true, comment: "&#128079; You got it! The Spirit Library of Knowledge is the correct name of the library"},
            { text: "The Spirit World Archives", correct: false, comment: "The Spirit World Archives is not the correct name of the library"},
        ]
    },
    {
        question: "Who is not a member of the Order of the White Lotus?",
        answers: [
            { text: "Long Feng", correct: true, comment: "&#128079; You got it! Long Feng is not a member of the Order of the White Lotus. Rather he is the leader of the Dai Li (which let's be honest, pales in comparison to the White Lotus)"},
            { text: "Iroh", correct: false, comment: "Iroh is a member of the Order of the White Lotus. He is the Grand Lotus"},
            { text: "Bumi", correct: false, comment: "Bumi is a member of the Order of the White Lotus. He is the King of Omashu"},
            { text: "Jeong Jeong", correct: false, comment: "Jeong Jeong is a member of the Order of the White Lotus. He is a very skilled firebender" }
        ]
    },
    {
        question: "What spirit does Katara disguise herself as in order to help a Fire Nation village?",
        answers: [
            { text: "Raava", correct: false, comment: "Raava is from the legend of Korra" },
            { text: "The Painted Lady", correct: true, comment: "&#128079; You got it! The Painted Lady is the spirit that Katara disguises herself as in order to help a Fire Nation village"},
            { text: "The Mother of Faces", correct: false, comment: "The Mother of Faces is from the legend of Korra"},
            { text: "Lady Tienhai", correct: false, comment: "Lady Tienhai is from the legend of Korra"}
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
    const selectedAnswer = questions[currentQuestionIndex].answers.find(answer => answer.text === selectedBtn.innerHTML);
    //const isCorrect = selectedBtn.dataset.correct === "true";
    const isCorrect = selectedAnswer.correct;

    displayComment(isCorrect, selectedAnswer.comment);

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    const correctBtn = Array.from(answerButtons.children).find(btn => btn.dataset.correct === "true");
    if (correctBtn) {
        correctBtn.classList.add("correct");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });


    // Array.from(answerButtons.children).forEach(button => {
    //     if (button.dataset.correct) {
    //         button.classList.add("correct");
    //     }
    //     button.disabled = true;
    // });
    nextButton.style.display = "block";
}



function displayComment(isCorrect, commentText) {
    const commentElement = document.createElement("p");
    commentElement.classList.add(isCorrect ? "correct-comment" : "incorrect-comment");
    commentElement.innerHTML = commentText;

    answerButtons.appendChild(commentElement);
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