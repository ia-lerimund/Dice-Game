let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const doubleBtn = document.getElementById("doubleBtn");
const player1Btn = document.getElementById("player1");
const player2Btn = document.getElementById("player2");
const container = document.querySelector(".container");
const whoStartsBlock = document.querySelector(".who-starts");

function showResetButton() {
	resetBtn.style.display = "block";
	rollBtn.style.display = "none";
	doubleBtn.style.display = "none";
	passBtn.style.display = "none";
}
function showRollButton() {
	resetBtn.style.display = "none";
	rollBtn.style.display = "block";
	doubleBtn.style.display = "none";
	passBtn.style.display = "none";
}
function choice() {
	rollBtn.style.display = "none";
	doubleBtn.style.display = "block";
	passBtn.style.display = "block";
}
function theWinner() {
	if (player1Score >= 20) {
		message.textContent = "Player 1 Won 🥳";
		showResetButton();
	} else if (player2Score >= 20) {
		message.textContent = "Player 2 Won 🎉";
		showResetButton();
	}
}

player1Btn.addEventListener("click", function () {
	container.style.display = "block";
	whoStartsBlock.style.display = "none";
});
player2Btn.addEventListener("click", function () {
	container.style.display = "block";
	whoStartsBlock.style.display = "none";
	message.textContent = "Player 2 Turn";
	player1Dice.classList.remove("active");
	player2Dice.classList.add("active");
	player1Turn = !player1Turn;
});
doubleBtn.addEventListener("click", doubleOrNothing);
passBtn.addEventListener("click", function () {
	if (player1Turn) {
		player1Dice.classList.remove("active");
		player2Dice.classList.add("active");
		message.textContent = "Player 2 Turn";
		showRollButton();
	} else {
		player2Dice.classList.remove("active");
		player1Dice.classList.add("active");
		message.textContent = "Player 1 Turn";
		showRollButton();
	}
	player1Turn = !player1Turn;
});
rollBtn.addEventListener("click", function () {
	const randomNumber = Math.floor(Math.random() * 6) + 1;
	if (player1Turn) {
		player1Score += randomNumber;
		player1Scoreboard.textContent = player1Score;
		player1Dice.textContent = randomNumber;
		choice();
	} else {
		player2Score += randomNumber;
		player2Scoreboard.textContent = player2Score;
		player2Dice.textContent = randomNumber;
		choice();
	}
	theWinner();
});

resetBtn.addEventListener("click", function () {
	reset();
});

function doubleOrNothing() {
	const chance = Math.floor(Math.random() < 0.5);
	const randomNumber = Math.floor(Math.random() * 6) + 1;
	if (player1Turn) {
		if (chance === 1) {
			player1Score += randomNumber;
			player1Scoreboard.textContent = player1Score;
			player1Dice.textContent = randomNumber;
			player1Dice.classList.remove("active");
			player2Dice.classList.add("active");
			message.textContent = "Player 2 Turn";
			showRollButton();
		} else {
			player1Score = chance;
			player1Scoreboard.textContent = chance;
			player1Dice.textContent = chance;
			player1Dice.classList.remove("active");
			player2Dice.classList.add("active");
			message.textContent = "Player 2 Turn";
			showRollButton();
		}
	} else {
		if (chance === 1) {
			player2Score += randomNumber;
			player2Scoreboard.textContent = player2Score;
			player2Dice.textContent = randomNumber;
			player2Dice.classList.remove("active");
			player1Dice.classList.add("active");
			message.textContent = "Player 2 Turn";
			showRollButton();
		} else {
			player2Score = chance;
			player2Scoreboard.textContent = chance;
			player2Dice.textContent = chance;
			player2Dice.classList.remove("active");
			player1Dice.classList.add("active");
			message.textContent = "Player 2 Turn";
			showRollButton();
		}
	}
	player1Turn = !player1Turn;
	theWinner();
}

function reset() {
	container.style.display = "none";
	whoStartsBlock.style.display = "block";
	player1Score = 0;
	player2Score = 0;
	player1Turn = true;
	player1Scoreboard.textContent = 0;
	player2Scoreboard.textContent = 0;
	player1Dice.textContent = "-";
	player2Dice.textContent = "-";
	message.textContent = "Player 1 Turn";
	resetBtn.style.display = "none";
	rollBtn.style.display = "block";
	player2Dice.classList.remove("active");
	player1Dice.classList.add("active");
}
