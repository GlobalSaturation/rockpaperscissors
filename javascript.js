function getComputerChoice() {
	//generate a random number of 1-3
	let randomNum = Math.floor((Math.random() * 3) + 1);

	switch(randomNum) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}

function validateAnswer(answer) {
	//smooth out any strange case before checking
	answer = answer.toLowerCase();

	if (answer == "rock" || answer == "paper" || answer == "scissors")
		return true;
	else
		return false;
}

function getHumanChoice() {
	let answer = window.prompt("Rock, paper, or scissors?");

	while(!validateAnswer(answer)) {
		answer = window.prompt("Invalid answer. Rock, paper, or scissors?");
	}
	return answer;
}

function capitalize(word) {
	word = word.toLowerCase();
	let firstChar = word.at(0);
	return word.replace(firstChar, firstChar.toUpperCase());
}

function didIWin(humanChoice, computerChoice) {
	let isWinner;

	if (humanChoice == "Rock" && computerChoice == "Scissors")
		isWinner = true;
	else if (humanChoice == "Paper" && computerChoice == "Rock")
		isWinner = true;
	else if (humanChoice == "Scissors" && computerChoice == "paper")
		isWinner = true;

	if (computerChoice == "rock" && humanChoice== "scissors")
		isWinner = false;
	else if (computerChoice == "paper" && humanChoice == "rock")
		isWinner = false;
	else if (computerChoice == "scissors" && humanChoice == "paper")
		isWinner = false;

	return isWinner;
}

//takes in both sides' choices and returns string of the winner
function playRound(humanChoice, computerChoice) {
	let winner = "nobody";

	humanChoice = capitalize(humanChoice);
	computerChoice = capitalize(computerChoice);
	
	console.log(`You chose ${humanChoice} and the CPU chose ${computerChoice}`);

	if (humanChoice === computerChoice) {
		console.log(`Tie! Both sides picked ${humanChoice}`);
	}
	else if (didIWin(humanChoice, computerChoice)) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		winner = "human";
	}
	else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		winner = "computer";
	}
	
	return winner;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	//play 5 rounds
	for (let roundNum = 1; roundNum <= 5; roundNum++) {
		console.log("Round #" + roundNum);

		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();
		let winner = playRound(humanChoice, computerChoice);

		//update score based on winner of the round
		if (winner == "human")
			humanScore++;
		else if (winner == "computer")
			computerScore++;

		console.log(`Score: ${humanScore}-${computerScore}`);
	}

	//Determine overall winner
	if (humanScore > computerScore) {
		console.log("You won the game!");
	}
	else if (humanScore < computerScore) {
		console.log("You lost the game. Better luck next time!");
	}
	else {
		console.log("The game tied!");
	}
}

//start the game
playGame();
