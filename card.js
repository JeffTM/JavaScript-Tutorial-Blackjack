//Card and ImageCard object
//Requires utils.js

//Object that represents a card with a rank, suit, and value
//rank: "two" through "ten", "jack", "queen", "king", "ace"
//suit: "diamond", "heart", "club", or "spade"
//value: whatever number of points the card is worth in the specific game
function Card(rank, suit, value = 0)
{
	this.rank = rank;
	this.suit = suit;
	this.value = value;
}

Card.prototype.fullName = function()
{
	return titleCase(this.rank) + ' of ' + titleCase(pluralize(this.suit));
}

Card.prototype.isAce = function()
{
	let rankLower = this.rank.toLowerCase();
	return rankLower === 'ace' || rankLower === 'a';
}

//ImageCard is a subclass of card that has a path to its image file
function ImageCard(rank, suit, imagePath, value = 0)
{
	Card.call(this, rank, suit, value);
	this.imagePath = imagePath;
}

ImageCard.prototype = Object.create(Card.prototype);
ImageCard.prototype.constructor = ImageCard;

ImageCard.prototype.getImageElement = function()
{
	let img = new Image();
	img.src = this.imagePath;
	img.alt = this.fullName();
	return img;
}