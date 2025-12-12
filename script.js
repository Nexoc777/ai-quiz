// script.js

// Constants
const QUESTIONS_PER_PAGE = 10;
const TOTAL_QUESTIONS = ALL_QUIZ_DATA.length;

// Global State
let shuffledQuizData = [];
let score = 0;
let currentQuestionIndex = 0; // Index in the shuffled array (0 to 99)
let currentPage = 1; // Current page number (1 to 10)
let userAnswers = new Array(TOTAL_QUESTIONS).fill(null); // To store and track answered questions

// DOM Elements
const questionNumberFrEl = document.getElementById('question-number-fr');
const questionNumberArEl = document.getElementById('question-number-ar');
const questionFrEl = document.getElementById('question-fr');
const questionArEl = document.getElementById('question-ar');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const checkBtnAr = document.getElementById('check-btn-ar');
const nextQuestionBtn = document.getElementById('next-question-btn');
const nextQuestionBtnAr = document.getElementById('next-question-btn-ar');
const restartBtn = document.getElementById('restart-btn');
const restartBtnAr = document.getElementById('restart-btn-ar');
const scoreContainer = document.getElementById('score-container');
const scoreFrEl = document.getElementById('score-fr');
const scoreArEl = document.getElementById('score-ar');
const pageNumbersContainer = document.getElementById('page-numbers-container');
const prevPageBtn = document.getElementById('prev-page-btn');
const prevPageBtnAr = document.getElementById('prev-page-btn-ar');
const nextPageBtn = document.getElementById('next-page-btn');
const nextPageBtnAr = document.getElementById('next-page-btn-ar');


// Utility Functions

/**
 * Fisher-Yates shuffle algorithm.
 * @param {Array} array 
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Shuffles the answer options for a single question.
 * The 'answer' index must point to the correct option in the original array.
 * We return a new array of options and a map for the new correct index.
 * @param {Object} question The question object with options_fr, options_ar, and answer
 * @returns {Object} New object with shuffled options and the new correct index
 */
function shuffleOptions(question) {
    const optionsFr = [...question.options_fr];
    const optionsAr = [...question.options_ar];
    
    // Create an array of indices [0, 1, 2, 3]
    const indices = [0, 1, 2, 3];
    
    // Create a new mapping of old index -> new index
    const shuffledIndices = shuffleArray(indices);
    
    const shuffledOptionsFr = shuffledIndices.map(i => optionsFr[i]);
    const shuffledOptionsAr = shuffledIndices.map(i => optionsAr[i]);
    
    // Find the new index of the original correct answer
    const newCorrectIndex = shuffledIndices.indexOf(question.answer);
    
    return {
        options_fr: shuffledOptionsFr,
        options_ar: shuffledOptionsAr,
        newCorrectIndex: newCorrectIndex
    };
}


// Quiz Logic Functions

function loadQuestion() {
    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        displayResult();
        return;
    }

    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    
    // Check if question has already been answered and use stored options/correctIndex
    if (!currentQuestion.shuffled) {
        const { options_fr, options_ar, newCorrectIndex } = shuffleOptions(currentQuestion);
        currentQuestion.shuffledOptionsFr = options_fr;
        currentQuestion.shuffledOptionsAr = options_ar;
        currentQuestion.correctIndex = newCorrectIndex;
        currentQuestion.shuffled = true;
    }

    // Update Question Number display
    const qNum = currentQuestionIndex + 1;
    questionNumberFrEl.textContent = `Question ${qNum} / ${TOTAL_QUESTIONS}`;
    questionNumberArEl.textContent = `السؤال ${qNum} / ${TOTAL_QUESTIONS}`;

    // Update Question text
    questionFrEl.textContent = currentQuestion.question_fr;
    questionArEl.textContent = currentQuestion.question_ar;

    // Clear and build Options
    optionsContainer.innerHTML = '';
    currentQuestion.shuffledOptionsFr.forEach((optionFr, index) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.setAttribute('data-index', index);
        
        // French Content
        const pFr = document.createElement('p');
        pFr.classList.add('lang-fr');
        pFr.textContent = optionFr;
        optionEl.appendChild(pFr);
        
        // Arabic Content
        const pAr = document.createElement('p');
        pAr.classList.add('lang-ar');
        pAr.setAttribute('dir', 'rtl');
        pAr.textContent = currentQuestion.shuffledOptionsAr[index];
        optionEl.appendChild(pAr);
        
        optionEl.addEventListener('click', () => selectOption(optionEl));
        optionsContainer.appendChild(optionEl);
    });

    // Reset controls and feedback
    feedbackEl.innerHTML = '';
    nextQuestionBtn.classList.add('hidden');
    nextQuestionBtnAr.classList.add('hidden');
    restartBtn.classList.add('hidden');
    restartBtnAr.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    
    // Re-enable/show check buttons and options
    checkBtn.classList.remove('hidden');
    checkBtnAr.classList.remove('hidden');
    optionsContainer.querySelectorAll('.option').forEach(opt => opt.classList.remove('disabled', 'correct', 'incorrect', 'selected'));

    // If already answered, disable options, show result, and move to next button
    if (userAnswers[currentQuestionIndex] !== null) {
        checkAnswer(true); // Re-run check only for display purpose
    }
    
    // Update pagination buttons state
    renderPagination();
}

function selectOption(selectedOption) {
    // Clear previous selection
    optionsContainer.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Set current selection
    selectedOption.classList.add('selected');
}

function checkAnswer(isReload = false) {
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    const selectedOption = optionsContainer.querySelector('.option.selected');
    const correctIndex = currentQuestion.correctIndex;

    // If reloading an already answered question, the selected option is the stored one
    let selectedIndex = -1;
    if (isReload) {
        selectedIndex = userAnswers[currentQuestionIndex].selectedIndex;
    } else {
        if (!selectedOption) {
            feedbackEl.innerHTML = `<p class="incorrect-msg lang-fr">Veuillez sélectionner une option.</p><p class="incorrect-msg lang-ar" dir="rtl">الرجاء تحديد خيار.</p>`;
            return;
        }
        selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
    }
    
    // Store answer if checking for the first time
    if (!isReload) {
        userAnswers[currentQuestionIndex] = { selectedIndex: selectedIndex, correct: (selectedIndex === correctIndex) };

        // Update score
        if (selectedIndex === correctIndex) {
            score++;
            feedbackEl.innerHTML = `<p class="correct-msg lang-fr">Correct !</p><p class="correct-msg lang-ar" dir="rtl">صحيح !</p>`;
        } else {
            feedbackEl.innerHTML = `<p class="incorrect-msg lang-fr">Faux ! La bonne réponse est l'option ${correctIndex + 1}.</p><p class="incorrect-msg lang-ar" dir="rtl">خطأ ! الإجابة الصحيحة هي الخيار ${correctIndex + 1}.</p>`;
        }
    } else {
        // Clear immediate feedback on reload
        feedbackEl.innerHTML = '';
    }

    // Highlighting options for both initial check and reload
    optionsContainer.querySelectorAll('.option').forEach(opt => {
        const optionIndex = parseInt(opt.getAttribute('data-index'));
        opt.classList.add('disabled'); // Disable all after check

        if (optionIndex === correctIndex) {
            opt.classList.add('correct');
        } else if (optionIndex === selectedIndex) {
            opt.classList.add('incorrect');
            opt.classList.remove('selected'); // Remove 'selected' class from incorrect answer if it was selected
        }
    });
    
    // Re-highlight the selected option for a consistent look on reload
    if (isReload) {
        const selectedEl = optionsContainer.querySelector(`[data-index='${selectedIndex}']`);
        if (selectedEl) {
             selectedEl.classList.add('selected'); // Re-apply selected state
        }
    }

    // Hide check buttons and show next question button if not the last question
    checkBtn.classList.add('hidden');
    checkBtnAr.classList.add('hidden');
    
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        nextQuestionBtn.classList.remove('hidden');
        nextQuestionBtnAr.classList.remove('hidden');
    } else if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
        // Last question, only show the final score upon submission
        displayResult();
    }
    
    // Update score display on check
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreFrEl.textContent = score;
    scoreArEl.textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function displayResult() {
    questionFrEl.textContent = "Quiz Terminé !";
    questionArEl.textContent = "انتهى الاختبار !";
    
    optionsContainer.innerHTML = '';
    feedbackEl.innerHTML = '';
    
    // Hide the main question number as we show the final result
    questionNumberFrEl.textContent = '';
    questionNumberArEl.textContent = '';
    
    // Hide all question/page controls
    checkBtn.classList.add('hidden');
    checkBtnAr.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    nextQuestionBtnAr.classList.add('hidden');
    document.getElementById('pagination-controls').classList.add('hidden');


    // Show restart and final score
    restartBtn.classList.remove('hidden');
    restartBtnAr.classList.remove('hidden');
    scoreContainer.classList.remove('hidden');
    
    // Update the final score text to match the total
    document.querySelector('#score-container .lang-fr').innerHTML = `Score final : <span id="score-fr">${score}</span> / ${TOTAL_QUESTIONS}`;
    document.querySelector('#score-container .lang-ar').innerHTML = `النتيجة النهائية : <span id="score-ar">${score}</span> / ${TOTAL_QUESTIONS}`;
}

function restartQuiz() {
    // Re-initialize state
    shuffledQuizData = shuffleArray(ALL_QUIZ_DATA.map(q => ({ ...q, shuffled: false })));
    score = 0;
    currentQuestionIndex = 0;
    currentPage = 1;
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    
    // Show hidden elements
    document.getElementById('pagination-controls').classList.remove('hidden');

    // Start the quiz
    loadQuestion();
}


// Pagination Functions

function renderPagination() {
    const totalPages = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_PAGE);
    pageNumbersContainer.innerHTML = '';
    
    const currentIndex = currentQuestionIndex;
    currentPage = Math.floor(currentIndex / QUESTIONS_PER_PAGE) + 1; // Recalculate current page

    // Update Page Navigation Buttons visibility
    if (currentPage <= 1) {
        prevPageBtn.classList.add('hidden');
        prevPageBtnAr.classList.add('hidden');
    } else {
        prevPageBtn.classList.remove('hidden');
        prevPageBtnAr.classList.remove('hidden');
    }

    if (currentPage >= totalPages) {
        nextPageBtn.classList.add('hidden');
        nextPageBtnAr.classList.add('hidden');
    } else {
        nextPageBtn.classList.remove('hidden');
        nextPageBtnAr.classList.remove('hidden');
    }

    // Render Page Number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.add('lang-fr', 'lang-ar');
        pageBtn.setAttribute('data-page', i);

        // Calculate the question range for this page
        const startQ = (i - 1) * QUESTIONS_PER_PAGE + 1;
        const endQ = Math.min(i * QUESTIONS_PER_PAGE, TOTAL_QUESTIONS);
        
        // Show the range for large quizzes
        pageBtn.title = `Questions ${startQ} - ${endQ}`; 

        if (i === currentPage) {
            pageBtn.classList.add('active');
        }

        // Add visual indicator for a page that is fully or partially answered
        const questionsInPage = userAnswers.slice(startQ - 1, endQ);
        const answeredCount = questionsInPage.filter(a => a !== null).length;

        if (answeredCount > 0 && answeredCount < QUESTIONS_PER_PAGE) {
             pageBtn.style.border = '2px solid orange'; // Partially answered
        } else if (answeredCount === QUESTIONS_PER_PAGE) {
             pageBtn.style.border = '2px solid #00796b'; // Fully answered
        }

        pageBtn.addEventListener('click', () => goToPage(i));
        pageNumbersContainer.appendChild(pageBtn);
    }
}

/**
 * Navigates to a specific page by moving to the first question of that page.
 * @param {number} pageNumber The page to navigate to (1-indexed)
 */
function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_PAGE)) return;
    
    currentPage = pageNumber;
    // Set the current question index to the first question of the new page
    currentQuestionIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    
    // Load the first question on the new page
    loadQuestion();
}


// Event Listeners (using the new button names)
checkBtn.addEventListener('click', () => checkAnswer(false));
checkBtnAr.addEventListener('click', () => checkAnswer(false));
nextQuestionBtn.addEventListener('click', nextQuestion);
nextQuestionBtnAr.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
restartBtnAr.addEventListener('click', restartQuiz);

// New Pagination Listeners
prevPageBtn.addEventListener('click', () => goToPage(currentPage - 1));
prevPageBtnAr.addEventListener('click', () => goToPage(currentPage - 1));
nextPageBtn.addEventListener('click', () => goToPage(currentPage + 1));
nextPageBtnAr.addEventListener('click', () => goToPage(currentPage + 1));


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (ALL_QUIZ_DATA.length > 0) {
        restartQuiz(); // Initialize the quiz
    } else {
        questionFrEl.textContent = "Erreur: Aucune donnée de quiz trouvée.";
        questionArEl.textContent = "خطأ: لم يتم العثور على بيانات اختبار.";
    }
});