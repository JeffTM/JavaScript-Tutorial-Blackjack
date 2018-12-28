//Card and ImageCard object

//String manipulators. Maybe move these to their own file?
function pluralize(str)
{
	if (str[str.length - 1] !== 's')
		return str + 's';
	else
		return str;
}

function titleCase(str)
{
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

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