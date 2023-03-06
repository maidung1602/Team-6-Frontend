const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn1'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

const multipleClose = document.querySelector('.btnx');
const close = document.querySelector('#alrtbtn2');
const stay = document.querySelector('#alrtbtn1');
const alert = document.querySelector('.thong-bao-thoat');
const check = document.querySelector('#ftbtn');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];



fetch(
    'http://localhost:7777/api/getquestions'
)
    .then((res) =>
    {
        return res.json();
    })
    .then((loadedQuestions) =>
    {
        questions = loadedQuestions.listQuestion.map((loadedQuestion) =>
        {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [ ...loadedQuestion.incorrect_answers ];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) =>
            {
                formattedQuestion[ 'choice' + (index + 1) ] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) =>
    {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;


function closeChoice()
{
    alert.classList.add('open');
}
multipleClose.addEventListener('click', closeChoice);

function closeAlert()
{
    alert.classList.remove('open');
    multiple.classList.remove('open');
}

close.addEventListener('click', closeAlert);
// xác nhận ở lại
function stayAlert()
{
    alert.classList.remove('open');
}
stay.addEventListener('click', stayAlert);

startGame = () =>
{
    questionCounter = 0;
    score = 0;
    availableQuesions = [ ...questions ];
    getNewQuestion();

};

getNewQuestion = () =>
{
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('multiple_choice/end');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter - 1}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${((questionCounter - 1)/ MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[ questionIndex ];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) =>
    {
        const number = choice.dataset[ 'number' ];
        choice.innerHTML = currentQuestion[ 'choice' + number ];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) =>
{
    choice.addEventListener('click', (e) =>
    {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset[ 'number' ];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
            alertCorrect();
            document.querySelector('.green').addEventListener('click', closeCorrectAlert);
        }
        else {
            alertWrong();
            document.querySelector('.red').addEventListener('click', closeWrongAlert);

        }
        function alertCorrect()
        {
            document.querySelector('.correct').classList.add('open');
        }
        function alertWrong()
        {
            document.querySelector('.wrong').classList.add('open');
        }
        function closeCorrectAlert()
        {
            document.querySelector('.correct').classList.remove('open');
        }

        function closeWrongAlert()
        {
            document.querySelector('.wrong').classList.remove('open');
        }

        // selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() =>
        {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) =>
{
    score += num;
    scoreText.innerText = score;
};


function quit(){
    location.assign("/learning");
}