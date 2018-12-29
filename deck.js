//A deck of Card objects for blackjack
//Requires cards.js and utils.js

//A Deck is an ordered list of cards
//Creates an empty deck
function Deck()
{
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
	return this.cards[index];
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
	return this.get(this.length() - 1);
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

//Sets the card at index
Deck.prototype.set = function(index, newCard)
{
	this.cards[index] = newCard;
}

//Shuffles the deck
Deck.prototype.shuffle = function()
{
	let deckLength = this.length();
	for (i = 0; i < deckLength; ++i)
	{
		let swapIndex = randomBetween(i, deckLength);
		let temp = this.get(i);
		this.set(i, this.get(swapIndex));
		this.set(swapIndex, temp);
	}
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

//Deletes all child nodes of node then adds the images of all its cards
ImageDeck.prototype.showImagesIn = function(node)
{
	removeAllChildren(node);
	for (let i = 0; i < this.length(); ++i)
	{
		node.appendChild(this.get(i).getImageElement());
	}
}