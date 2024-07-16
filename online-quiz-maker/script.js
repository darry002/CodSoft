let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
let currentQuiz = {};
let currentQuestionIndex = 0;
let score = 0;
let isAuthenticated = false;

function addQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-form';
    questionContainer.innerHTML = `
        <div class="form-group">
            <label for="question">Question</label>
            <input type="text" class="form-control" name="question" required>
        </div>
        <div class="form-group">
            <label for="options">Options (comma separated)</label>
            <input type="text" class="form-control" name="options" required>
        </div>
        <div class="form-group">
            <label for="answer">Correct Answer</label>
            <input type="text" class="form-control" name="answer" required>
        </div>
    `;
    document.getElementById('questions-container').appendChild(questionContainer);
}

document.getElementById('quiz-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const quiz = {
        questions: []
    };
    const questionForms = document.querySelectorAll('.question-form');
    questionForms.forEach(form => {
        const question = form.querySelector('[name="question"]').value;
        const options = form.querySelector('[name="options"]').value.split(',').map(opt => opt.trim());
        const answer = form.querySelector('[name="answer"]').value;
        quiz.questions.push({ question, options, answer });
    });
    quizzes.push(quiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    alert('Quiz created successfully!');
    location.href = 'quiz-listing.html';
});

function startQuiz(index) {
    currentQuiz = quizzes[index];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-list-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('options').innerHTML = '';
    
    question.options.forEach(option => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'option';
        optionLabel.innerHTML = `
            <input type="radio" name="question${currentQuestionIndex}" value="${option}">
            <span class="option-text">${option}</span>
        `;
        document.getElementById('options').appendChild(optionLabel);
    });

    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('submit-button').style.display = 'block';
    } else {
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('submit-button').style.display = 'none';
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption && selectedOption.value === currentQuiz.questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.questions.length) {
        displayQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption && selectedOption.value === currentQuiz.questions[currentQuestionIndex].answer) {
        score++;
    }

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `${score}/${currentQuiz.questions.length}`;
}

function displayQuizzes() {
    const quizListContainer = document.getElementById('quiz-list');
    quizListContainer.innerHTML = ''; // Clear existing content
    quizzes.forEach((quiz, index) => {
        const quizItem = document.createElement('div');
        quizItem.className = 'quiz-item';
        quizItem.innerHTML = `
            <h4>Quiz ${index + 1}</h4>
            <button class="btn btn-primary" onclick="startQuiz(${index})">Start Quiz</button>
            <button class="btn btn-danger" onclick="deleteQuiz(${index})">Delete Quiz</button>
        `;
        quizListContainer.appendChild(quizItem);
    });
}

function deleteQuiz(index) {
    quizzes.splice(index, 1);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    displayQuizzes();
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('quiz-list')) {
        displayQuizzes();
    }
});

function login(username, password) {
    // Simulate a successful login
    isAuthenticated = true;
    alert("Login successful!");
    location.href = 'index.html';
}

function logout() {
    isAuthenticated = false;
    alert("Logged out successfully!");
    location.href = 'index.html';
}
