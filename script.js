function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNode(arr) {
	var i = getRandomInt(0, arr.length - 1);
	return arr[i];
}

function hangman() {
	function getRandomWord() {
		var words = [
			"planet",
			"star",
			"satellite",
			"eclipse",
			"astronaut",
			"supernova",
		];
		return getRandomNode(words);
	}

	var lives;
	var word;
	var secretWord;
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var keyboard = document.getElementById("hangman-keyboard");
	var playBtn = document.getElementById("hangman-play");
	var messageContainer = document.getElementById("hangman-message");