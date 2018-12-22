//A deck of Card objects
//Requires cards.js to be loaded first

//Creates and empty deck. If passed true it will load a standard deck using makeStandardDeck()
function Deck(loadStandardDeck = false)
{
	this.cards = [];
	if (loadStandardDeck)
		this.makeStandardDeck();
}

Deck.prototype.makeStandardDeck = function()
{
	let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	let ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	this.cards = [];
	for (i = 0; i < suits.length; ++i)
	{
		for (j = 0; j < ranks.length; ++j)
		{
			this.cards.push(new Card(ranks[j], suits[i], values[j]));
		}
	}
}