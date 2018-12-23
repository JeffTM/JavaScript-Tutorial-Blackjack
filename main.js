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
	let deck = new Deck();
	deck.makeStandardDeck();
	deck.shuffle();
	addStatus('Game loaded. Welcome to Blackjack!');
	for (i = 0; i < deck.length(); ++i)
	{
		addStatus(deck.get(i).fullName() + ' ' + deck.get(i).value + ' ace: ' + deck.get(i).isAce());
	}
	addStatus('Length: ' + deck.length());
	addStatus('Popped card: ' + deck.pop().fullName());
	addStatus('Length: ' + deck.length());
	addStatus('Popped card: ' + deck.pop().fullName());
	addStatus('Length: ' + deck.length());
	addStatus('Peeked card: ' + deck.peek().fullName());
	deck.clear();
	addStatus('Length: ' + deck.length());
	deck.push(new Card('test', 'test'));
	addStatus('Popped card: ' + deck.pop().fullName());
}