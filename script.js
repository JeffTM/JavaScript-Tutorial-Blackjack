function setStatus(text)
{
	console.log(text);
	document.getElementById('status').innerHTML = text;
}

function main()
{
	setStatus('Game loaded. Welcome to Blackjack!');
}