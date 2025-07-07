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

//make getHumanChoice function
function getHumanChoice() {
	let answer = "none";
	//validate with while loop
	while(answer != "rock" && answer != "paper" && answer != "scissors") {
		//use prompt method to get user input
		answer = window.prompt("rock, paper, or scissors?");
	}
	return answer;
}

let answer = getHumanChoice();
console.log(`you answered "${answer}"!`)
console.log(`computer answered "${getComputerChoice()}"!`);
