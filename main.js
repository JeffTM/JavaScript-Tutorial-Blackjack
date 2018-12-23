//Main game script
//Requires card.js and deck.js to be loaded beforehand in that order

//Game variables
var deck = new Deck();
var dealerHand = new Deck();
var playerHand = new Deck();


function addStatus(text)
{
	console.log(text);
	let status = document.getElementById('status');
	status.innerHTML = status.innerHTML + divSurround(text);
}

funciton divSurround(str)
{
	return '<div>' + str + '</div>';
}

function setStatus(text)
{
	console.log(text);
	let status = document.getElementById('status');
	status.innerHTML = divSurround(text);
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
	
	showDealerHand();
	showPlayerHand();
}

function showDealerHand()
{
	let divs = dealerHand.fullNameList.map(divSurround);
	document.getElementById('dealerHand').innerHTML = divs.join('');
}

function showPlayerHand()
{
	
}