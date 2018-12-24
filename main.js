//Main game script
//Requires card.js and deck.js to be loaded beforehand in that order

//Document areas
var statusArea = document.getElementById('status');
var dealerHandArea = document.getElementById('dealerHand');
var playerHandArea = document.getElementById('playerHand');

//Document buttons
var hitButton = document.getElementById('hitButton');
var standButton = document.getElementById('standButton');

//Game variables
var deck = new Deck();
var dealerHand = new Deck();
var playerHand = new Deck();

function addStatus(text)
{
	console.log(text);
	statusArea.innerHTML = statusArea.innerHTML + divSurround(text);
}

function divSurround(str)
{
	return '<div>' + str + '</div>';
}

function hitEvent()
{
	addStatus('Player hits');
	playerHand.push(deck.pop());
}
hitButton.addEventListener('click', hitEvent);

function scoreDeck(deck)
{
	let aceCount = 0;
	
}

function setStatus(text)
{
	console.log(text);
	statusArea.innerHTML = divSurround(text);
}

function setup()
{
	//Reset everything
	deck.makeStandardDeck();
	//deck.shuffle();
	dealerHand.clear();
	playerHand.clear();
	
	//Initial deal
	dealerHand.push(deck.pop());
	dealerHand.push(deck.pop());
	playerHand.push(deck.pop());
	playerHand.push(deck.pop());
	
	//Update UI
	setStatus('New game!');
	showDealerHand();
	showPlayerHand();
}

function showDealerHand()
{
	let divs = dealerHand.fullNameList().map(divSurround);
	dealerHandArea.innerHTML = divs.join('');
}

function showPlayerHand()
{
	let divs = playerHand.fullNameList().map(divSurround);
	playerHandArea.innerHTML = divs.join('');
}

function standEvent()
{
	addStatus('Player stands');
}
standButton.addEventListener('click', standEvent);

//Call setup
setup();
