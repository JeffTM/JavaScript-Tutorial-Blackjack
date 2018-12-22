//Main game script
//Requires card.js and deck.js to be loaded beforehand in that order

function addStatus(text)
{
	console.log(text);
	let status = document.getElementById('status');
	status.innerHTML = status.innerHTML + '<div>' + text + '</div>';
}

function setStatus(text)
{
	console.log(text);
	let status = document.getElementById('status');
	status.innerHTML = '<div>' + text + '</div>';
}

function main()
{
	let deck = new Deck(true);
	addStatus('Game loaded. Welcome to Blackjack!');
	for (i = 0; i < deck.length; ++i)
	{
		addStatus(deck[i].fullName() + ' ' + deck[i].value + ' ace: ' + deck[i].isAce());
	}
}