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
	let answer = "none";
	//keep looping while answer is not valid
	while(!validateAnswer(answer)) {
		//use prompt method to get user input
		answer = window.prompt("rock, paper, or scissors?");
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

//takes in human and computer choice
function playround(humanChoice, computerChoice) {
	let isWinner;
	let isTie = false;

	//capitalize the choices first
	humanChoice = capitalize(humanChoice);
	computerChoice = capitalize(computerChoice);
	
	//Print the moves of both sides
	console.log(`You chose ${humanChoice} and the CPU chose ${computerChoice}`);

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

	//check tie
	if (humanChoice === computerChoice)
		isTie = true;
	
	//print losing, winning, or tying message
	if (isTie === true) {
		console.log("Tie! " + message);
	}
	else if (isWinner === true) {
		humanScore ++;
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	}
	else {
		computerScore ++;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	}
}

//initialize global scores
let humanScore = 0;
let computerScore = 0;

//store variables of human and computer choices
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//begin a round
playround(humanChoice, computerChoice);
