//make function getComputerChoice that returns "rock", "paper", or "scissors"
function getComputerChoice() {
	//generate a random number of 1-3
	let randomNum = Math.floor((Math.random() * 3) + 1);
	//check which number was generated and return one of the three responses
	switch(randomNum) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}

//make answer validation function that returns boolean
function validateAnswer(answer) {
	//check for different cases by setting the answer to lowercase
	answer = answer.toLowerCase();

	if (answer == "rock" || answer == "paper" || answer == "scissors")
		return true;
	else
		return false;
}

//make getHumanChoice function that returns the string answer
function getHumanChoice() {
	//use prompt method to get user input
	let answer = window.prompt("Rock, paper, or scissors?");
	//keep looping while answer is not valid
	while(!validateAnswer(answer)) {
		answer = window.prompt("Invalid answer. Rock, paper, or scissors?");
	}
	return answer;
}

//Capitalize the first characer of a string and return modified string
function capitalize(word) {
	//set the whole word to lowercase first
	word = word.toLowerCase();
	//get the first characer of the word
	let firstChar = word.at(0);
	//replace the first character in the word with an uppercase version
	return word.replace(firstChar, firstChar.toUpperCase());
}

//returns true or false
function didIWin(humanChoice, computerChoice) {
	let isWinner;
	//check wins
	if (humanChoice == "Rock" && computerChoice == "Scissors")
		isWinner = true;
	else if (humanChoice == "Paper" && computerChoice == "Rock")
		isWinner = true;
	else if (humanChoice == "Scissors" && computerChoice == "paper")
		isWinner = true;

	//check losses
	if (computerChoice == "rock" && humanChoice== "scissors")
		isWinner = false;
	else if (computerChoice == "paper" && humanChoice == "rock")
		isWinner = false;
	else if (computerChoice == "scissors" && humanChoice == "paper")
		isWinner = false;

	return isWinner;
}

//takes in human and computer choice and returns string of the winner
function playRound(humanChoice, computerChoice) {
	let isTie = false;
	let winner = "nobody";

	//capitalize the choices first
	humanChoice = capitalize(humanChoice);
	computerChoice = capitalize(computerChoice);
	
	//print the moves of both sides
	console.log(`You chose ${humanChoice} and the CPU chose ${computerChoice}`);

	//check tie
	if (humanChoice === computerChoice)
		isTie = true;
	
	//print tie message
	if (isTie === true) {
		console.log(`Tie! Both sides picked ${humanChoice}`);
	}
	//print win message
	else if (didIWin(humanChoice, computerChoice)) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		winner = "human";
	}
	//print lose message
	else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		winner = "computer";
	}
	
	return winner;
}

function playGame() {
	//initialize scores
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

		//print current score
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
