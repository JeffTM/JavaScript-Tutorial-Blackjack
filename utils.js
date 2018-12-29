//Utility functions that don't quite belong in the other files
//Should be included before all other files

//Sets a nodes display to "none"
function hideNode(node)
{
	node.style.display = "none";
}

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

//Removes all child nodes of a node
function removeAllChildren(node)
{
	while (node.hasChildNodes())
		node.removeChild(node.lastChild);
}

//Sets a nodes diplay to "inline-block"
function showNodeInlineBlock(node)
{
	node.style.display = "inline-block";
}

//Returns a div element that contains str
function textDiv(str)
{
	let div = document.createElement('div');
	div.innerHTML = str;
	return div;
}

//Capitalizes the first character of the string and makes the rest of it lower case
function titleCase(str)
{
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}