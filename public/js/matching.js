// const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
const game = document.getElementById('game');
const scoreText = document.getElementById('score');
let score = 0;
let firstPick;
let isPaused = true;
let matches;
const CORRECT_BONUS = 20;
const loadCard = async () =>
{
    const randomIds = new Set();
    while (randomIds.size < 8) {
        const randomNumber = Math.ceil(Math.random() * 20);
        randomIds.add(randomNumber);
    }

    console.log([...randomIds]);

    const res = await fetch('http://localhost:7777/api/getquestions');
    const questions = await res.json();
    const question = questions.result;
    const a = [...randomIds];

    const randomChoice = [];

    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        const index = element;
        randomChoice[i] = question[index];
    }
    return randomChoice;
};


const joinGame = async () =>
{
    score = 0;
    game.innerHTML = '';
    isPaused = true;
    firstPick = null;
    matches = 0;

    setTimeout(async () =>
    {
        const loadedCard = await loadCard();

        const temp = [];
        for (let i = 0; i < loadedCard.length; i++) {
            const element = loadedCard[i];
            temp[i] = loadedCard[i].name;
        }
        displayCard([ ...loadedCard, ...temp]);
        isPaused = false;
    }, 200);

};

const displayCard = (card) =>
{
    card.sort(_ => Math.random() - 0.5);
    const cardHTML = card.map(card =>
    {
        return `
          <div class="card" onclick="clickCard(event)" data-pokename="${card.name || card}">
            <div class="deco not_chosen">
            <h2>${card.meaning || card}</h2>
            </div>
        </div>
    `;
    }).join('');
    game.innerHTML = cardHTML;
};

const clickCard = (e) =>
{
    const wordCard = e.currentTarget;
    if (wordCard.classList.contains('corrected') || isPaused) {
        return;
    }
    if (wordCard == firstPick) {
        firstPick.querySelector('.deco').classList.add('not_chosen');
        firstPick.id = '';
        firstPick = null;
        isPaused = false;
        return;
    }
    isPaused = true;
    if (!firstPick) {
        firstPick = wordCard;
        firstPick.id = 'chosen';
        firstPick.querySelector('.not_chosen').classList.remove('not_chosen');
        isPaused = false;
    }
    else {
        wordCard.querySelector('.not_chosen').classList.remove('not_chosen');
        const secondCardName = wordCard.dataset.pokename;
        const firstCardName = firstPick.dataset.pokename;
        if (firstCardName !== secondCardName) {
            callWrongAnimation(wordCard, firstPick);
            firstPick.id = '';
            firstPick = null;
        } else {
            
            wordCard.classList.add('corrected');
            firstPick.classList.add('corrected');
            firstPick.id = '';
            matches++;
            incrementScore(CORRECT_BONUS);
            if (matches === 8) {
                localStorage.setItem('mostRecentScore', score);
                console.log("WINNER");
                return window.location.assign('matching/end');
            }
            firstPick = null;
            isPaused = false;
        }
    }

};

function callWrongAnimation(c1, c2)
{
    c1.classList.add('wrong');
    c2.classList.add('wrong');
    setTimeout(() =>
    {
        c1.classList.remove('wrong');
        c2.classList.remove('wrong');
        c1.querySelector('.deco').classList.add('not_chosen');
        c2.querySelector('.deco').classList.add('not_chosen');
        isPaused = false;
    }, 1000);
};

joinGame();

function quit(){
    location.assign("/learning");
}

incrementScore = (num) =>
{
    score += num;
    scoreText.innerText = score;
};

//  thông báo thoát 

const multipleClose = document.querySelector('#quit-btn');
const close = document.querySelector('#alrtbtn2');
const stay = document.querySelector('#alrtbtn1');
const alert = document.querySelector('.thong-bao-thoat');

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
