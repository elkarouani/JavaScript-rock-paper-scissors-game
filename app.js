let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	
	return choices[randomNumber];
}

function convertToWord(letter) {
	switch (letter) {
		case "r":
			return "Rock";
			break;
		case "p":
			return "Paper";
			break;
		case "s":
			return "Scissors";
			break;
	}
}

function win(userChoice, computerChoice) {
	userScore++;

	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	const smalUserWord = "user".fontsize(3).sub();
	const smalCompWord = "comp".fontsize(3).sub();

	result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} beats ${convertToWord(computerChoice)}${smalCompWord}. You win!`;
}

function lose(userChoice, computerChoice) {
	computerScore++;

	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	const smalUserWord = "user".fontsize(3).sub();
	const smalCompWord = "comp".fontsize(3).sub();

	result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} lose to ${convertToWord(computerChoice)}${smalCompWord}. You lost!`;	
}

function draw(userChoice, computerChoice) {
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	const smalUserWord = "user".fontsize(3).sub();
	const smalCompWord = "comp".fontsize(3).sub();

	result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} equals ${convertToWord(computerChoice)}${smalCompWord}. Its a draw!`;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();

	switch (userChoice + computerChoice) {
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();