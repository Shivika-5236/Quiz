const allQuestions = [
  { 
    question: "What is JavaScript?", 
    answers: ["A language for styling", "A web programming language", "A database"], 
    correct: 1,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "How do you declare a variable?", 
    answers: ["var x", "variable x", "int x"], 
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "What is 2 + 2?", 
    answers: ["3", "4", "5"], 
    correct: 1,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "What is NaN?", 
    answers: ["Not a number", "A number", "Undefined"], 
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "How do you write a single line comment?", 
    answers: ["// comment", "/* comment */", "# comment"], 
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "What is '=='?", 
    answers: ["Equal value", "Assignment", "Comparison"], 
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  { 
    question: "What is the result of 2 + '2'?", 
    answers: ["4", "22", "undefined"], 
    correct: 1,
    category: "advanced",
    subject: "JavaScript"
  },
  { 
    question: "How do you define a function?", 
    answers: ["function() {}", "def func()", "create function()"], 
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "Which is a JavaScript data type?", 
    answers: ["Character", "Integer", "String"], 
    correct: 2,
    category: "basics",
    subject: "JavaScript"
  },
  { 
    question: "What is a closure?", 
    answers: ["Function with variables", "A storage", "A type of loop"], 
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  // Added questions to reach at least 10 in each category
  {
    question: "Which method is used to print something to the console?",
    answers: ["console.log()", "print()", "window.alert()"],
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "How do you declare a constant variable?",
    answers: ["var x", "let x", "const x"],
    correct: 2,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "What is the correct way to write an array?",
    answers: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}"],
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "What does 'use strict' do?",
    answers: ["Enforces stricter parsing and error handling", "Allows for more flexible code", "Declares a variable"],
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is the purpose of the 'this' keyword?",
    answers: ["Refers to the current function", "Refers to the global object", "Refers to the object it belongs to"],
    correct: 2,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is asynchronous programming?",
    answers: ["Code that runs sequentially", "Code that runs in parallel", "Code that allows tasks to run independently without blocking the main thread"],
    correct: 2,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is a Promise in JavaScript?",
    answers: ["An assurance that code will run without errors", "An object that represents the eventual completion or failure of an asynchronous operation", "A type of loop"],
    correct: 1,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is the difference between 'let', 'const', and 'var'?",
    answers: ["Their hoisting behavior and scope", "Their data types", "Their performance"],
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is event delegation?",
    answers: ["Assigning a single event listener to a parent element to manage events for its children", "Handling events directly on each element", "Ignoring events"],
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is the DOM?",
    answers: ["A database management system", "A programming interface for web documents", "A JavaScript framework"],
    correct: 1,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google"],
    correct: 1,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "Which operator is used for strict equality (value and type)?",
    answers: ["==", "===", "!="],
    correct: 1,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "How do you convert a string to a number?",
    answers: ["parseInt()", "toString()", "concat()"],
    correct: 0,
    category: "basics",
    subject: "JavaScript"
  },
  {
    question: "What is hoisting?",
    answers: ["A mechanism where variable and function declarations are moved to the top of their scope before code execution", "A way to lift elements in the DOM", "A method for optimizing loops"],
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is a callback function?",
    answers: ["A function that calls itself", "A function passed as an argument to another function", "A function that returns a function"],
    correct: 1,
    category: "advanced",
    subject: "JavaScript"
  },
  {
    question: "What is the purpose of async/await?",
    answers: ["To make asynchronous code easier to write and understand", "To define synchronous functions", "To prevent code execution"],
    correct: 0,
    category: "advanced",
    subject: "JavaScript"
  },
  // HTML Questions (Basics)
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High-Level Text Machine Language", "Hyperlink and Text Management Language"],
    correct: 0,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<script>", "<css>", "<style>"],
    correct: 2,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML element is used for specifying a footer for a document or section?",
    answers: ["<footer>", "<bottom>", "<aside>"],
    correct: 0,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<lb>", "<break>", "<br>"],
    correct: 2,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "style", "font"],
    correct: 1,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML element is used to specify a title for the document?",
    answers: ["<head>", "<title>", "<body>"],
    correct: 1,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "What is the HTML element for the largest heading?",
    answers: ["<h6>", "<head>", "<h1>"],
    correct: 2,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "What is the correct HTML element for playing video files?",
    answers: ["<media>", "<video>", "<movie>"],
    correct: 1,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: ["src", "title", "alt"],
    correct: 2,
    category: "basics",
    subject: "HTML"
  },
  {
    question: "Which HTML element is used to define navigation links?",
    answers: ["<nav>", "<navigate>", "<navigation>"],
    correct: 0,
    category: "basics",
    subject: "HTML"
  },
  // HTML Questions (Advanced)
  {
    question: "What does the `<!DOCTYPE html>` declaration do?",
    answers: ["Declares the file as an HTML document", "Defines the document type to be HTML5", "Indicates the version of HTML being used"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is the purpose of the `<meta>` tag?",
    answers: ["To define metadata about an HTML document", "To create a meta description", "To link external resources"],
    correct: 0,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "Explain the difference between `<div>` and `<span>`.",
    answers: ["`div` is inline, `span` is block", "`div` is block, `span` is inline", "They are the same"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is semantic HTML?",
    answers: ["HTML with meaningful tags", "HTML that looks good", "HTML with complex structures"],
    correct: 0,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What are HTML entities?",
    answers: ["Special characters represented by codes", "HTML elements", "HTML attributes"],
    correct: 0,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is the purpose of the `aria-*` attributes?",
    answers: ["To define styles", "To improve accessibility", "To create animations"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is the role of the `<canvas>` element?",
    answers: ["To draw graphics on the fly", "To embed videos", "To create forms"],
    correct: 0,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is the difference between `local storage` and `session storage`?",
    answers: ["Local storage expires, session storage does not", "Session storage expires, local storage does not", "They are the same"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What is the purpose of the `srcset` attribute in an `<img>` tag?",
    answers: ["To specify the image source", "To provide a set of image sources for different screen densities or viewports", "To add a caption to the image"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  },
  {
    question: "What does the `defer` attribute in a `<script>` tag do?",
    answers: ["Pauses script execution", "Ensures the script is executed after the document has been parsed", "Loads the script asynchronously"],
    correct: 1,
    category: "advanced",
    subject: "HTML"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let quizSetCount = 0;
let timer;
let timeLeft = 30;
let selectedCategory = 'all';
let selectedSubject = 'all';
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const continueButton = document.getElementById("continue-btn");
const exitButton = document.getElementById("exit-btn");
const scoreBox = document.getElementById("score-box");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const timerElement = document.getElementById("timer");
const categorySelector = document.getElementById("category-selector");
const quizMain = document.getElementById("quiz-main");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const highScoresList = document.getElementById("high-scores-list");
const subjectSelector = document.createElement('div');
subjectSelector.id = 'subject-selector';
subjectSelector.innerHTML = `
  <h2>Select Subject</h2>
  <div class="categories">
    <button class="subject-btn" data-subject="all">All Subjects</button>
    <button class="subject-btn" data-subject="JavaScript">JavaScript</button>
    <button class="subject-btn" data-subject="HTML">HTML</button>
  </div>
`;

// Insert subject selector before category selector
categorySelector.parentNode.insertBefore(subjectSelector, categorySelector);
categorySelector.classList.add('hidden');

function startQuiz() {
  quizSetCount = 0;
  score = 0;
  currentQuestionIndex = 0;
  timeLeft = 30;
  subjectSelector.classList.add("hidden");
  categorySelector.classList.add("hidden");
  quizMain.classList.remove("hidden");
  loadQuestion();
  startTimer();
  updateProgressBar();
}

function loadQuestion() {
  resetState();
  const filteredBySubject = selectedSubject === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.subject === selectedSubject);

  const filteredBySubjectAndCategory = selectedCategory === 'all'
    ? filteredBySubject
    : filteredBySubject.filter(q => q.category === selectedCategory);
  
  // Shuffle questions for randomness
  const shuffledQuestions = filteredBySubjectAndCategory.sort(() => Math.random() - 0.5);

  // Limit to 5 questions per set (if needed, adjust logic)
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

  // Shuffle answers for randomness
  const shuffledAnswers = currentQuestion.answers.map((answer, index) => ({ answer, index })).sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach(({ answer, index }) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");
    // Find the original index to check correctness
    const originalIndex = currentQuestion.answers.indexOf(answer);
    button.addEventListener("click", () => selectAnswer(button, originalIndex === currentQuestion.correct));
    answersElement.appendChild(button);
  });
}

function resetState() {
  answersElement.innerHTML = "";
  nextButton.disabled = true;
  timeLeft = 30;
  timerElement.textContent = timeLeft;
}

function selectAnswer(button, isCorrect) {
  clearInterval(timer);
  if (isCorrect) {
    button.classList.add("correct");
    score++;
    correctSound.play();
  } else {
    button.classList.add("wrong");
    wrongSound.play();
  }
  Array.from(answersElement.children).forEach((btn) => (btn.disabled = true));
  nextButton.disabled = false;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      Array.from(answersElement.children).forEach((btn) => {
        if (btn.classList.contains("correct")) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
        btn.disabled = true;
      });
      nextButton.disabled = false;
    }
  }, 1000);
}

function updateProgressBar() {
  const filteredQuestions = selectedSubject === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.subject === selectedSubject);

  const filteredBySubjectAndCategory = selectedCategory === 'all'
    ? filteredQuestions
    : filteredQuestions.filter(q => q.category === selectedCategory);

  const progress = ((currentQuestionIndex + 1) / filteredBySubjectAndCategory.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function handleNext() {
  currentQuestionIndex++;
  const filteredBySubject = selectedSubject === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.subject === selectedSubject);

  const filteredBySubjectAndCategory = selectedCategory === 'all'
    ? filteredBySubject
    : filteredBySubject.filter(q => q.category === selectedCategory);

  if (currentQuestionIndex < filteredBySubjectAndCategory.length) {
    loadQuestion();
    startTimer();
    updateProgressBar();
  } else {
    showScore();
  }
}

function showContinueOption() {
  questionElement.textContent = "Quiz Complete!";
  showScore();
}

function continueQuiz() {
  showScore();
}

function exitQuiz() {
  showScore();
}

function showScore() {
  clearInterval(timer);
  questionElement.textContent = "Quiz Complete!";
  scoreBox.classList.remove("hidden");
  scoreElement.textContent = score;
  quizMain.classList.add("hidden");
  
  // Update high scores
  const playerName = prompt("Enter your name for the high score:");
  if (playerName) {
    highScores.push({ name: playerName, score: score, subject: selectedSubject, category: selectedCategory });
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 5); // Keep only top 5
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }
  
  // Display high scores
  highScoresList.innerHTML = highScores
    .map((scoreEntry, index) => `<li>${index + 1}. ${scoreEntry.name}: ${scoreEntry.score} (Subject: ${scoreEntry.subject}, Category: ${scoreEntry.category})</li>`)
    .join('');
  
  nextButton.textContent = "Restart";
  nextButton.classList.remove("hidden");
  continueButton.classList.add("hidden");
  exitButton.classList.add("hidden");
}

// Event Listeners
nextButton.addEventListener("click", () => {
  if (nextButton.textContent === "Restart") {
    quizMain.classList.add("hidden");
    scoreBox.classList.add("hidden");
    subjectSelector.classList.remove("hidden");
    nextButton.textContent = "Next";
    selectedSubject = 'all';
    selectedCategory = 'all';
    currentQuestionIndex = 0;
    score = 0;
    updateProgressBar();
  } else {
    handleNext();
  }
});

// Event listeners for subject selection buttons (delegation on subjectSelector)
subjectSelector.addEventListener('click', (event) => {
  if (event.target.classList.contains('subject-btn')) {
    selectedSubject = event.target.dataset.subject;
    // Now show category selection for the selected subject
    displayCategoriesForSubject(selectedSubject);
  }
});

// Event listeners for category selection buttons (delegation on categorySelector)
categorySelector.addEventListener('click', (event) => {
  if (event.target.classList.contains('category-btn')) {
    selectedCategory = event.target.dataset.category;
    startQuiz();
  }
});

function displayCategoriesForSubject(subject) {
  // Clear previous category buttons
  categorySelector.querySelector('.categories').innerHTML = '';

  const categories = new Set();
  if (subject === 'all') {
    // Collect all categories from all questions
    allQuestions.forEach(q => categories.add(q.category));
    // Add 'All Categories' option when 'All Subjects' is selected
    const allCatButton = document.createElement('button');
    allCatButton.classList.add('category-btn');
    allCatButton.dataset.category = 'all';
    allCatButton.textContent = 'All Categories';
    categorySelector.querySelector('.categories').appendChild(allCatButton);

  } else {
    // Collect categories specific to the selected subject
    allQuestions.filter(q => q.subject === subject).forEach(q => categories.add(q.category));
    // Add 'All Categories' option when a specific subject is selected
    const allCatButton = document.createElement('button');
    allCatButton.classList.add('category-btn');
    allCatButton.dataset.category = 'all';
    allCatButton.textContent = `All ${subject} Questions`;
    categorySelector.querySelector('.categories').appendChild(allCatButton);
  }

  // Add buttons for each collected category
  categories.forEach(category => {
    const button = document.createElement('button');
    button.classList.add('category-btn');
    button.dataset.category = category;
    button.textContent = `${subject === 'all' ? category : `${subject} ${category}`}`;
    categorySelector.querySelector('.categories').appendChild(button);
  });

  // Show the category selector
  categorySelector.classList.remove('hidden');
}

// Initial state: show subject selection
subjectSelector.classList.remove("hidden");
categorySelector.classList.add("hidden");
quizMain.classList.add("hidden");
scoreBox.classList.add("hidden");

