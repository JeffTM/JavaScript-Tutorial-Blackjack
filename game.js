//Main game script
//Requires card.js, deck.js, and utils.js

//Document areas
var statusArea = document.getElementById('status');
var dealerHandArea = document.getElementById('dealerHand');
var dealerScoreArea = document.getElementById('dealerScore');
var playerHandArea = document.getElementById('playerHand');
var playerScoreArea = document.getElementById('playerScore');

//Document buttons
var hitButton = document.getElementById('hitButton');
var newGameButton = document.getElementById('newGameButton');
var standButton = document.getElementById('standButton');

//Game variables
var deck = new ImageDeck();
var dealerHand = new ImageDeck();
var playerHand = new ImageDeck();

//Appends a new div containing the string to the status area and logs the string to the console
function addStatus(str)
{
	console.log(str);
	statusArea.appendChild(textDiv(str));
}

//The dealer takes his turn then the game ends
//Should be called after the player busts or stands
function dealerTurn()
{
	addStatus("Dealer's turn");
	//If dealer score is < 17 hit. Soft 17s not implemented
	let dealerScore = scoreDeck(dealerHand);
	while (dealerScore < 17)
	{
		let drawCard = deck.pop();
		dealerHand.push(drawCard);
		dealerScore = scoreDeck(dealerHand);
		addStatus('Dealer draws ' + drawCard.fullName());
		showDealerHand();
	}
	
	let dealerBusted = false;
	if (dealerScore > 21)
	{
		addStatus('Dealer busted');
		dealerBusted = true;
	}
	else
		addStatus('Dealer stands');
	
	//End game
	let playerScore = scoreDeck(playerHand);
	let playerBusted = false;
	if (playerScore > 21)
		playerBusted = true;
	if (dealerBusted && playerBusted)
		addStatus('Push');
	else if (dealerBusted && !playerBusted)
		addStatus('Player wins!');
	else if (!dealerBusted && playerBusted)
		addStatus('Dealer wins!');
	else //No one busts
	{
		if (dealerScore === playerScore)
			addStatus('Push');
		else if (dealerScore >  playerScore)
			addStatus('Dealer wins!');
		else
			addStatus('Player wins!');
	}
	
	hideNode(hitButton);
	hideNode(standButton);
	showNodeInlineBlock(newGameButton);
}

//Called when hitButton is pressed
function hitEvent()
{
	addStatus('Player hits');
	playerHand.push(deck.pop());
	showPlayerHand();
	let score = scoreDeck(playerHand);
	if (score > 21)
	{
		addStatus('Player busted');
		dealerTurn();
	}
}

//Resets the game to a new game state
//Should be called before the first game is played
function resetGame()
{
	//Reset decks
	deck.makeStandardDeck();
	deck.shuffle();
	dealerHand.clear();
	playerHand.clear();
	
	//Initial deal
	dealerHand.push(deck.pop());
	dealerHand.push(deck.pop());
	playerHand.push(deck.pop());
	playerHand.push(deck.pop());
	
	//Update UI
	setStatus('New game!');
	showDealerHand();
	showPlayerHand();
	addStatus("Player's turn");
	hideNode(newGameButton);
	showNodeInlineBlock(hitButton);
	showNodeInlineBlock(standButton);
}

//Calculates a blackjack score for a deck representing a players hand
function scoreDeck(deck)
{
	let aceCount = 0;
	let score = 0;
	for (let i = 0; i < deck.length(); ++i)
	{
		let card = deck.get(i);
		score += card.value;
		if (card.isAce())
			++aceCount;
	}
	while (score <= 11 && aceCount > 0)
	{
		score += 10;
		aceCount -= 1;
	}
	return score;
}

//Removes all children of the status area then calls addStatus(str)
function setStatus(str)
{
	removeAllChildren(statusArea);
	addStatus(str);
}

//Shows the dealerHand deck in dealerHandArea
function showDealerHand()
{
	dealerHand.showImagesIn(dealerHandArea);
	dealerScoreArea.innerHTML = 'Score: ' + scoreDeck(dealerHand);
}

//Shows the playerHand deck in playerHandArea
function showPlayerHand()
{
	playerHand.showImagesIn(playerHandArea);
	playerScoreArea.innerHTML = 'Score: ' + scoreDeck(playerHand);
}

//Called when standButton is pressed
function standEvent()
{
	addStatus('Player stands');
	dealerTurn();
}

//Event listeners
hitButton.addEventListener('click', hitEvent);
newGameButton.addEventListener('click', resetGame);
standButton.addEventListener('click', standEvent);

//Call resetGame for initial setup
resetGame();
