//Utility functions that don't quite belong in the other files
//Should be included before all other files

//Appends 's' to the end of the string if its last character is not 's'
function pluralize(str)
{
	if (str[str.length - 1] !== 's')
		return str + 's';
	else
		return str;
}

//Returns a random integer on the range [low, high)
//Low and high must be integers >= 0. high must be greater than low
function randomBetween(low, high)
{
	let range = high - low;
	return Math.floor(Math.random() * range) + low;
}

//Capitalizes the first character of the string and makes the rest of it lower case
function titleCase(str)
{
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}