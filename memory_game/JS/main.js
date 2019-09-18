//Cards available in cards array
const cards = [
//CARD 0
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},

//CARD 1 
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

//CARD 2
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

//CARD 3
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

];


//Empty hand (cards inPlay array) to put cards in...
var cardsInPlay = [];



//Check for Match Function
function checkForMatch () {
this.getAttribute("data-src", "images/queen-of-diamonds.png");
if (cardsInPlay[0] === cardsInPlay[3]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

//OLD FLIP VERSION:
//Asign array value to cardOne, push to empty hand, message 
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//Asign array vaaue to cardTwo, push to empty hand, message 
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);



//NEW FLIP VERSION:
//FUNCTION
function flipCard () {
//Trigger check for match first
this.getAttribute('data-id');
checkForMatch();
console.log("User flipped " + cards[cardId].rank)
if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[3]) {
	alert("Nope.");
} else if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[3]) {
	alert("Match!");
}
cardsInPlay.push(cards[cardId.rank]);

};

//Adding card image and ID...
createBoard () {
	for (var i=1; i < cards.length; i++) {
		var cardElement = document.createElement ('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.appendChild("game-board");
	}
}

cardElement.addEventListener("click", "flipCard");


//TO BE CONTINUED...


console.log(cardImage)
console.log(suit);

createBoard();




















