//make function getComputerChoice that returns "rock", "paper", or "scissors"
function getComputerChoice() {
	//generate a random number of 1-3
	let randomNum = Math.floor((Math.random() * 3) + 1);
	console.log(randomNum);
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

console.log(getComputerChoice() + "!");
