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

Deck.prototype.fullNameList = function()
{
	callFullName = function(card) {return card.fullName();}
	return this.cards.map(callFullName);
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

Deck.prototype.length = function()
{
	return this.cards.length;
}

//Makes a standard blackjack deck in a specific order. Calls clear first
Deck.prototype.makeStandardDeck = function()
{
	this.clear();
	let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	let ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	for (let i = 0; i < suits.length; ++i)
	{
		for (let j = 0; j < ranks.length; ++j)
		{
			this.cards.push(new Card(ranks[j], suits[i], values[j]));
		}
	}
}

//Returns the top card on the deck but does not remove it
Deck.prototype.peek = function()
{
	return this.cards[this.cards.length - 1];
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

//Get a list of all card values
//ToDo: Unused. Delete?
Deck.prototype.valueList = function()
{
	let getValue = function(card) {return card.value;}
	return this.cards.map(getValue);
}

//A deck that is designed to have its cards array filled with ImageCard objects
function ImageDeck()
{
	Deck.call(this);
}

ImageDeck.prototype = Object.create(Deck.prototype);
ImageDeck.prototype.constructor = ImageDeck;

//Override's Deck.makeStandardDeck
ImageDeck.prototype.makeStandardDeck = function()
{
	this.clear();
	
	let suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	let ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	
	let filePathRanks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
	let fileEnding = '.svg'
	
	for (let i = 0; i < suits.length; ++i)
	{
		for (let j = 0; j < ranks.length; ++j)
		{
			let filePath = "./cards/" + filePathRanks[j] + "_of_" + suits[i].toLowerCase() + fileEnding;
			this.cards.push(new ImageCard(ranks[j], suits[i], filePath, values[j]));
		}
	}
}