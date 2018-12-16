function setStatus(text)
{
	console.log(text);
	document.getElementById('status').innerHTML = text;
}

function generateDeck()
{
	let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
	let ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
	let cards = []
	for (i = 0; i < suits.length; ++i)
	{
		for (j = 0; j < ranks.length; ++j)
		{
			cards.push(ranks[j] + ' of ' + suits[i]);
		}
	}
	return cards;
}

function main()
{
	let deck = generateDeck();
	setStatus('Game loaded. Welcome to Blackjack!');
	setStatus(deck);
}