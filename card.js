//String manipulators. Maybe move these to their own file?
function pluralize(str)
{
	if (str[s.length - 1] !== 's')
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
	return titleCase(rank) + ' of ' + titleCase(pluralize(suit));
}