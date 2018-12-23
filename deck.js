//A deck of Card objects for blackjack
//Requires cards.js to be loaded first

//Helper method for shuffle
//Returns a random integer on the range [low, high)
//Low and high must be integers >= 0
function randomBetween(low, high)
{
	let range = high - low;
	return Math.floor(Math.random() * range) + low;
}

//Creates and empty deck
function Deck()
{
	//note that this array is used as a stack. The first card is at the last index
	this.cards = [];
}

Deck.prototype.clear = function()
{
	this.cards = [];
}

Deck.prototype.isEmpty = function()
{
	return this.length() === 0;
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

Deck.prototype.length = function()
{
	return this.cards.length;
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

//Adds a new card to the deck
Deck.prototype.push = function(card)
{
	this.cards.push(card);
}

//Shuffles the deck
Deck.prototype.shuffle = function()
{
	let cardsLength = this.cards.length;
	for (i = 0; i < cardsLength; ++i)
	{
		let swapIndex = randomBetween(i, cardsLength);
		let temp = this.cards[i];
		this.cards[i] = this.cards[swapIndex];
		this.cards[swapIndex] = temp;
	}
}