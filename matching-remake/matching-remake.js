const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
const game = document.getElementById('game');

const matchingClose = document.querySelector('#quit-btn');
const close = document.querySelector('#alrtbtn2');
const stay = document.querySelector('#alrtbtn1');
const alert = document.querySelector('.thong-bao-thoat');

let firstPick;
let isPaused = true;
let matches;

const loadCard = async () => {
    const randomIds = new Set();
    while(randomIds.size < 8){
        const randomNumber = Math.ceil(Math.random() * 150);
        randomIds.add(randomNumber);
    }
    const cardPromises = [...randomIds].map(id => fetch(pokeAPIBaseUrl + id))
    const results = await Promise.all(cardPromises);
    return await Promise.all(results.map(res => res.json()));
}

const joinGame = async() => {
    game.innerHTML = '';
    isPaused = true;
    firstPick = null;
    matches = 0;
    setTimeout(async () => {
        const loadedCard = await loadCard();
        displayCard([...loadedCard, ...loadedCard]);
        isPaused = false;
    },200)
}

const displayCard = (card) => {
    card.sort(_ => Math.random() - 0.5);
    const cardHTML = card.map(card => {
        return `
          <div class="card" onclick="clickCard(event)" data-pokename="${card.name}">
            <div class="deco not_chosen">
            <img src="${card.sprites.front_default}" alt="${card.name}"  />
            <h2>${card.name}</h2>
            </div>
        </div>
    `}).join('');
    game.innerHTML = cardHTML;
}

function closeChoice()
{
    alert.classList.add('open');
}
matchingClose.addEventListener('click', closeChoice);

function closeAlert()
{
    alert.classList.remove('open');
    // multiple.classList.remove('open');
}

close.addEventListener('click', closeAlert);
// xác nhận ở lại
function stayAlert()
{
    alert.classList.remove('open');
}
stay.addEventListener('click', stayAlert);

function goToEndPage() {
    window.location.assign('../Team-6-Frontend-multipleChoice/end.html')
}

const clickCard = (e) => {
    const wordCard = e.currentTarget;
    if(wordCard.classList.contains('corrected') || isPaused) {
        return;
    }
    if(wordCard == firstPick) {
        firstPick.querySelector('.deco').classList.add('not_chosen');
        firstPick.id = '';
        firstPick = null;
        isPaused = false;
        return
    }
    isPaused = true;
    if(!firstPick){
        firstPick = wordCard;
        firstPick.id = 'chosen'
        firstPick.querySelector('.not_chosen').classList.remove('not_chosen');
        isPaused = false;
    }
    else {
        wordCard.querySelector('.not_chosen').classList.remove('not_chosen');
        const secondCardName = wordCard.dataset.pokename;
        const firstCardName = firstPick.dataset.pokename;
        if(firstCardName !== secondCardName) {
            callWrongAnimation(wordCard, firstPick);
            firstPick.id = '';
            firstPick = null;
        }else {
            wordCard.classList.add('corrected');
            firstPick.classList.add('corrected');
            firstPick.id = '';
            matches++;
            if(matches === 8) {
                goToEndPage();
            };
            firstPick = null;
            isPaused = false;
        }
    }
    
}

function callWrongAnimation(c1, c2) {
    c1.classList.add('wrong');
    c2.classList.add('wrong');
    setTimeout(() => {
        c1.classList.remove('wrong');
        c2.classList.remove('wrong');
        c1.querySelector('.deco').classList.add('not_chosen');
        c2.querySelector('.deco').classList.add('not_chosen');
        isPaused = false;
    }, 1000);
};

// const rotateElements = (elements) => {
//     if(typeof elements !== 'object' || !elements.length) return;
//     elements.forEach(element => element.classList.toggle('rotated'));
// }

joinGame();