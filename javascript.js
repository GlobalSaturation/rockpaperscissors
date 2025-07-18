function getComputerChoice() {
	//generate a random number of 1-3
	let randomNum = Math.floor((Math.random() * 3) + 1);

	switch(randomNum) {
		case 1:
			return "Rock";
		case 2:
			return "Paper";
		case 3:
			return "Scissors";
	}
}

function didIWin(humanChoice, computerChoice) {
	let isWinner;

	if (humanChoice == "Rock" && computerChoice == "Scissors")
		isWinner = true;
	else if (humanChoice == "Paper" && computerChoice == "Rock")
		isWinner = true;
	else if (humanChoice == "Scissors" && computerChoice == "paper")
		isWinner = true;

	if (computerChoice == "Rock" && humanChoice== "Scissors")
		isWinner = false;
	else if (computerChoice == "Paper" && humanChoice == "Rock")
		isWinner = false;
	else if (computerChoice == "Scissors" && humanChoice == "Paper")
		isWinner = false;

	return isWinner;
}

//takes in both sides' choices and returns string of the winner
function playRound(humanChoice, computerChoice) {
	let winner = "nobody";

	display(`You chose ${humanChoice} and the CPU chose ${computerChoice}`);

	if (humanChoice === computerChoice) {
		display(`Tie! Both sides picked ${humanChoice}`);
	}
	else if (didIWin(humanChoice, computerChoice)) {
		display(`You win! ${humanChoice} beats ${computerChoice}`);
		winner = "human";
	}
	else {
		display(`You lose! ${computerChoice} beats ${humanChoice}`);
		winner = "computer";
	}
	
	return winner;
}

function display(message) {
	const div = document.querySelector("#display");
	div.innerText = message;
}

//make all buttons clickable
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const winner = playRound(btn.innerText, getComputerChoice());
		updateScore(winner);
	});
})

//global score variables
let humanScore = 0;
let computerScore = 0;

function updateScore(winner) {
	if (winner == "human")
		humanScore++;
	else if (winner == "computer")
		computerScore++;

	const scoreBoard = document.querySelector("#score");
	scoreBoard.innerText = `Score: ${humanScore}-${computerScore}`;
}
