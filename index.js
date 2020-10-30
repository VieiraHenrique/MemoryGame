const grid = document.getElementById('grid');
const popup = document.getElementById('popup');
const restart = document.getElementById('restart')

const cards = [
    {
        name: 01,
        path: 'img/01.png',
        
    },
    {
        name: 01,
        path: 'img/01.png',
        
    },
    {
        name: 02,
        path: 'img/02.png'
    },
    {
        name: 02,
        path: 'img/02.png'
    },
    {
        name: 03,
        path: 'img/03.png'
    },
    {
        name: 03,
        path: 'img/03.png'
    },
    {
        name: 04,
        path: 'img/04.png'
    },
    {
        name: 04,
        path: 'img/04.png'
    },
    {
        name: 05,
        path: 'img/05.png'
    },
    {
        name: 05,
        path: 'img/05.png'
    },
    {
        name: 06,
        path: 'img/06.png'
    },
    {
        name: 06,
        path: 'img/06.png'
    },
];

let flipped = [];


function startGame(){
    grid.innerHTML = ''
    cards.sort( () => .5 - Math.random() );
    cards.forEach((c)=>{
        let card = document.createElement('img');
        card.setAttribute('src', 'img/back.png');
        card.setAttribute('id', c.path);
        card.classList.add('hidden');
        grid.appendChild(card);
    })
    turn();
}

function turn(){
    let cards = document.querySelectorAll('.hidden');
    cards.forEach((card)=>{
        card.addEventListener('click', ()=>{
            if (flipped.length<2){
                flipped.push(card.getAttribute('id'))
                showCard(card);
                if (flipped.length===2){
                    checkMatch()
                    flipped = []
                }
            }
        })
    })
}

function showCard(card){
    card.setAttribute('src', card.getAttribute('id'));
    card.classList.remove('hidden');
    card.classList.add('showned');
}

function checkMatch(){
    if (flipped[0]===flipped[1]){
        let goods = document.querySelectorAll(`img[id="${flipped[0]}"]`);
        goods.forEach((good)=>{
            good.classList.remove('showned')
        })
    } else {
        setTimeout(()=>{
            let shownedCards = document.querySelectorAll('.showned');
            shownedCards.forEach((card)=>{
            card.classList.remove('showned');
            card.classList.add('hidden');
            card.setAttribute('src', 'img/back.png')
        })
        }, 1000)
    }
    let test = document.querySelectorAll('.hidden');
    if (test.length === 0){
        gameOver();
    }
}

function gameOver(){
    popup.style.display = 'flex';
    restart.addEventListener('click', ()=>{
        popup.style.display = 'none'
        startGame()
    })
}

startGame()
