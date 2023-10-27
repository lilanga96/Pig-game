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


//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
function diceHidden(){
dice.classList.add('hidden');
}
diceHidden();

let currentScore = 0;

//functionality



rollDice.addEventListener('click', function(){
       const randomDice = Math.floor(Math.random()* 6)+1;
       dice.classList.remove('hidden');
       dice.src = `dice-${randomDice}.png`;

       if(randomDice !== 1){
        currentScore0 += randomDice;
       }
})