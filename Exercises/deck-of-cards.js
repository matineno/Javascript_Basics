// Deck of cards

'use strict';

const deck = [...new Array(52).keys()];
const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
];

/*
    Old school approach - Don't use it ( be lazy, but smart)
for (let i = 0; i < deck.length; i++) {
    let index = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
*/

// Modern technique to shuffle and array
deck.sort(() => Math.random() - 0.5);

for (let i = 0; i < 4; i++){
    let suit = suits[Math.trunc(deck[i] / 13)];
    let rank = ranks[deck[i]  % 13];
    let number = String(deck[i] + 1). padStart(2, '0');
    console.log(`Card ${number}: ${rank} of ${suit}`);
}
