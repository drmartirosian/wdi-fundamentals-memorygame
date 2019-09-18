

//GLOBAL variable arays:

//------------------------
//Cards on table: 0,       1,       2,     3
const cards = ["queen", "queen", "king", "king"];

//Empty hand to be filled later
var cardsInPlay = [];

//Selecting which cards are in hand
cardsInPlay.push(cards[0, 2]);




//------------------------
//FLIPCARD FUNCTION
function flipCard() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[3]) {
		alert("Sorry, try again.");
} 	else if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[3]) {
		alert("Match!");
}

console.log("User flipped " + cards[0]);
}

//-------------------------
//Calling flipcards AFTER function
flipCard (0)
flipCard (2)

//-------------------------
//OLD VERSION:1.0
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);



















