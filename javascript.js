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

//Toggles buttons off, then on if called a second time
function toggleButtons() {
	const buttons = document.querySelectorAll("button");
	buttons.forEach((btn) => {
		btn.classList.toggle("disabled");
	});
}

function updateScore(winner) {
	if (winner == "human")
		humanScore++;
	else if (winner == "computer")
		computerScore++;
	
	const winCondition = 5;
	if (humanScore === winCondition) {
		display("You won the game!");
		toggleButtons();
		createRetryButton();
	} else if (computerScore === winCondition) {
		display("You lost the game. Better luck next time!");
		toggleButtons();
		createRetryButton();
	}

	const scoreBoard = document.querySelector("#score");
	scoreBoard.innerText = `Score: ${humanScore}-${computerScore}`;
}

function createRetryButton() {
	const body = document.querySelector("body");
	const retryBtn = document.createElement("button");
	retryBtn.innerText = "Retry";

	retryBtn.addEventListener("click", () => {
		restartGame();
		body.removeChild(retryBtn);
	});
	
	body.appendChild(retryBtn);
}

function restartGame() {
	humanScore = 0;
	computerScore = 0;
	toggleButtons();
	updateScore();
	display("Welcome to Rock, Paper, Scissors!");
}

//Set the game up
let humanScore = 0;
let computerScore = 0;
updateScore();
//set the buttons up
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		//only work if buttons aren't disabled
		if (btn.getAttribute("class") !== "disabled") {
			const winner = playRound(btn.innerText, getComputerChoice());
			updateScore(winner);
		}
	});
})
