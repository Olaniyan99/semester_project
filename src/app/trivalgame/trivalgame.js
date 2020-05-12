
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Questions("What is know as the sunshine vitamin? ", ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], "D"),
    new Questions("Which of the following is not a grain? ", ['Bread', 'Milk', 'Pasta', 'Rice'], "B"),
    new Questions("Which of the following is a dairy product? ", ['Milk', 'Celery', 'Chicken', 'juice'], "A"),
    new Questions("Which of the following is a vegetable? ", ['Pineapple', 'Orange', 'Grape', 'Cabbage'], "D"),
    new Questions("Steak, Chicken, and Pork are examples of what food group? ", ['Meats', 'Whole Grains', 'Dairy', 'Veggies'], "A")
];

//create questions
var quiz = new Quiz(questions);
populate();

class Questions {
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
    }
}

questions.prototype.correctAnswer = function (choice) {
    return this.answer === choice;
}

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
    checkAnswer(Answer) {
        this.questionIndex++;
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
        }
    }
}




