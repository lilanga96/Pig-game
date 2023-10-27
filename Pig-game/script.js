'use strict';
//selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const holdGame = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');


//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
function diceHidden(){
dice.classList.add('hidden');
}
diceHidden();

let currentScore = 0;
let activePlayer = 0;

//functionality



rollDice.addEventListener('click', function(){
       const randomDice = Math.floor(Math.random()* 6)+1;
       dice.classList.remove('hidden');
       dice.src = `dice-${randomDice}.png`;

       if(randomDice !== 1){
        currentScore += randomDice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       }else{
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.classList.toggle('player--active');
        player2.classList.toggle('player--active');
       }
})

holdGame.addEventListener('click', function(){

    document.getElementById(`score--${activePlayer}`).textContent = currentScore;
})

newGame.addEventListener('click', function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    function diceHidden(){
    dice.classList.add('hidden');
}
    diceHidden();
    document.getElementById(`current--${activePlayer}`).textContent = 0;
     currentScore = 0;
    
})