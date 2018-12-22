//A deck of Card objects for blackjack
//Requires cards.js to be loaded first

//Creates and empty deck. If passed true it will load a standard deck using makeStandardDeck()
function Deck(loadStandardDeck = false)
{
	//note that this array is used as a stack. The first card is at the last index
	this.cards = [];
	if (loadStandardDeck)
		this.makeStandardDeck();
}

Deck.prototype.clear = function()
{
	this.cards = [];
}

//Gets the card at index but does not remove it
Deck.prototype.get = function(index)
{
	return this.cards[this.cards.length - index - 1];
}

//Returns the top card on the deck but does not remove it
Deck.prototype.getLast = function()
{
	return this.cards[this.cards.length - 1];
}

//Makes a standard blackjack deck in a specific order
Deck.prototype.makeStandardDeck = function()
{
	this.clear();
	let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	let ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	for (i = 0; i < suits.length; ++i)
	{
		for (j = 0; j < ranks.length; ++j)
		{
			this.cards.push(new Card(ranks[j], suits[i], values[j]));
		}
	}
}

//Removes the top card from the deck and returns it
Deck.prototype.pop = function()
{
	return this.cards.pop();
}

Deck.prototype.push = function(card)
{
	this.cards.push(card);
}

//Shuffles the deck
Deck.prototype.shuffle = function()
{
	//ToDo
}