const sample = [
  {
    question: "Who is the CEO of Tesla?",
    a: "Jeff Bezos",
    b: "Elon Musk",
    c: "Bill Gates",
    d: "Tony Stark",
    correct: "b",
    answer: "Elon Musk",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
    answer: "JavaScripts",
  },
  {
    question: "Who won the 2018 FIFA World Cup?",
    a: "Germany",
    b: "Argentina",
    c: "Brazil",
    d: "France",
    correct: "d",
    answer: "France",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What is the largest planet in our solar system?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "c",
    answer: "Jupiter",
  },
  {
    question: "What is the chemical formula for water?",
    a: "H2O",
    b: "CO2",
    c: "O2",
    d: "NaCl",
    correct: "a",
    answer: "H2O",
  },
  {
    question: "In which year did the Titanic sink?",
    a: "1912",
    b: "1905",
    c: "1915",
    d: "1920",
    correct: "a",
    answer: "1912",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    a: "Mark Twain",
    b: "Harper Lee",
    c: "F. Scott Fitzgerald",
    d: "Ernest Hemingway",
    correct: "b",
    answer: "Harper Lee",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Venus",
    correct: "b",
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Vincent van Gogh",
    b: "Pablo Picasso",
    c: "Claude Monet",
    d: "Leonardo da Vinci",
    correct: "d",
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    a: "Gold",
    b: "Iron",
    c: "Diamond",
    d: "Platinum",
    correct: "c",
    answer: "Diamond",
  },
];

const Question = [
  ...sample,
  {
    question: "What is the smallest prime number?",
    a: "1",
    b: "2",
    c: "3",
    d: "5",
    correct: "b",
    answer: "2",
  },
  {
    question: "What is the capital of Canada?",
    a: "Toronto",
    b: "Ottawa",
    c: "Vancouver",
    d: "Montreal",
    correct: "b",
    answer: "Ottawa",
  },
  {
    question: "Which planet is closest to the sun?",
    a: "Venus",
    b: "Earth",
    c: "Mercury",
    d: "Mars",
    correct: "c",
    answer: "Mercury",
  },
  {
    question: "What is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
    answer: "Pacific Ocean",
  },
  {
    question: "What is the tallest mountain in the world?",
    a: "K2",
    b: "Mount Kilimanjaro",
    c: "Mount Everest",
    d: "Denali",
    correct: "c",
    answer: "Mount Everest",
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Au",
    b: "Ag",
    c: "Pb",
    d: "Fe",
    correct: "a",
    answer: "Au",
  },

  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    a: "Oxygen",
    b: "Carbon Dioxide",
    c: "Hydrogen",
    d: "Nitrogen",
    correct: "d",
    answer: "Nitrogen",
  },
  {
    question: "Who developed the theory of relativity?",
    a: "Isaac Newton",
    b: "Galileo Galilei",
    c: "Albert Einstein",
    d: "Niels Bohr",
    correct: "c",
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest desert in the world?",
    a: "Sahara Desert",
    b: "Arabian Desert",
    c: "Gobi Desert",
    d: "Antarctic Desert",
    correct: "d",
    answer: "Antarctic Desert",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "African Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Hippopotamus",
    correct: "b",
    answer: "Blue Whale",
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    a: "Leonardo da Vinci",
    b: "Raphael",
    c: "Michelangelo",
    d: "Donatello",
    correct: "c",
    answer: "Michelangelo",
  },
  {
    question: "What is the chemical symbol for sodium?",
    a: "Na",
    b: "S",
    c: "N",
    d: "So",
    correct: "a",
    answer: "Na",
  },
  {
    question: "What is the smallest continent by land area?",
    a: "Europe",
    b: "Australia",
    c: "Antarctica",
    d: "South America",
    correct: "b",
    answer: "Australia",
  },
  {
    question: "What is the most spoken language in the world?",
    a: "Spanish",
    b: "English",
    c: "Mandarin Chinese",
    d: "Hindi",
    correct: "c",
    answer: "Mandarin Chinese",
  },
];

const answerInputs = document.querySelectorAll(".answer");
const question = document.querySelector(".js-question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector(".js-submit-btn");
const answerStatus = document.querySelector(".js-answer-status");
const quizContainer = document.querySelector(".js-quiz-container");
const quizNum = document.querySelector(".counter");

let currentQuiz = 0;
let score = 0;

loadQuiz();

submitBtn.addEventListener("click", () => {
  if (submitBtn.innerHTML === "Submit") {
    resetClasses();
    answerStatus.innerHTML = "";
    const answer = getSelectedOption();
    if (answer) {
      if (answer === Question[currentQuiz].correct) {
        score++;
        answerStatus.classList.add("correct");
        answerStatus.innerHTML = "You're Right! 😉";
      } else {
        answerStatus.classList.add("incorrect");
        answerStatus.innerHTML = `Incorrect! 😢... The correct answer is ${Question[currentQuiz].answer}. `;
      }
      currentQuiz++;
      if (currentQuiz < Question.length) {
        submitBtn.innerHTML = "Next";
      } else {
        submitBtn.innerHTML = "Finish";
      }
    } else {
      resetClasses();
      answerStatus.classList.add("warning");
      answerStatus.innerHTML = "Please select an option ⚠";
    }
  } else if (submitBtn.innerHTML === "Next") {
    loadQuiz();
    submitBtn.innerHTML = "Submit";
  } else {
    quizContainer.innerHTML = `
      <div class="result">
        <h2>You answered ${score} / ${Question.length} questions correctly.</h2>
        <button class="c-btn" onclick="location.reload()">Play Again 🔄</button>
      </div>
  `;
  }
});

function resetClasses() {
  answerStatus.classList.remove("warning");
  answerStatus.classList.remove("correct");
  answerStatus.classList.remove("incorrect");
}

function resetAll() {
  answerInputs.forEach((answerInput) => (answerInput.checked = false));

  answerStatus.innerHTML = "";
}

function loadQuiz() {
  resetAll();
  const currentQuestion = Question[currentQuiz];

  quizNum.innerHTML = `${currentQuiz + 1} / ${Question.length}`;
  question.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
}

function getSelectedOption() {
  let answer;
  answerInputs.forEach((answerInput) => {
    if (answerInput.checked) {
      answer = answerInput.id;
    }
  });
  return answer;
}
