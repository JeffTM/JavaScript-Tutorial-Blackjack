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

function dealerTurn()
{
	
}

function divSurround(str)
{
	return '<div>' + str + '</div>';
}

function hitEvent()
{
	addStatus('Player hits');
	playerHand.push(deck.pop());
	showPlayerHand();
	let score = scoreDeck(playerHand);
	if (score > 21)
	{
		addStatus('Player busted');
		dealerTurn();
	}
}

function scoreDeck(deck)
{
	let aceCount = 0;
	let score = 0;
	for (let i = 0; i < deck.length(); ++i)
	{
		let card = deck.get(i);
		score += card.value;
		if (card.isAce())
			++aceCount;
	}
	while (score <= 11 && aceCount > 0)
	{
		score += 10;
		aceCount -= 1;
	}
	return score;
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
	dealerTurn();
}

//Event listeners
hitButton.addEventListener('click', hitEvent);
standButton.addEventListener('click', standEvent);

//Call setup
setup();
