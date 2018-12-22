function addStatus(text)
{
	console.log(text);
	let status = document.getElementById('status');
	status.innerHTML = status.innerHTML + '<div>' + text + '</div>';
}

function setStatus(text)
{
	console.log(text);
	document.getElementById('status').innerHTML = '<div>' + text + '</div>';
}

function generateDeck()
{
	let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
	let ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
	let deck = []
	for (i = 0; i < suits.length; ++i)
	{
		for (j = 0; j < ranks.length; ++j)
		{
			deck.push(new Card(ranks[j], suits[i]));
		}
	}
	return deck;
}

function main()
{
	let deck = generateDeck();
	addStatus('Game loaded. Welcome to Blackjack!');
	for (i = 0; i < deck.length; ++i)
	{
		addStatus(deck[i].fullName());
	}
}