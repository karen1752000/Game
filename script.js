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

function renderCurrentWord() {
	var wordContainer = document.getElementById("hangman-word");
	wordContainer.innerHTML = ""; 

	secretWord.forEach(function(char) {
		var span = document.createElement("span");
		span.className = "letter";
		span.innerHTML = char;
		wordContainer.appendChild(span);

	});
}

function renderMessage(msg) {
		messageContainer.innerHTML = msg;
	}

	function renderLives() {
		var message = "You have"  + lives +  " lives left!";
		if (lives <= 0) {
			message = "Game over!";
		}
		renderMessage(message);
	}

	function revealLetter(letter) {
		for (var i = 0; i < word.length; i++) {
			if (letter == word[i]) {
				secretWord[i] = word[i];
			}
		}
		renderCurrentWord();
	}

	function buttonClick(e) {
		e.preventDefault();

		var btn = this;
		var letter = btn.innerHTML; 
		var notFound = -1;
		var correct = word.indexOf(letter) != notFound; 
		btn.disabled = true;

		if (correct) {
			revealLetter(letter);
			if (secretWord.indexOf("_") == notFound) {
				// Hidden char
				renderMessage("You Win!");
			}
		} else {
			lives -= 1;
			renderLives();
			if (lives <= 0) {
				deactivateKeyBoard();
			}
		}
	}

	function renderKeyBoard() {
		// Renders alphabetic keyboard
		alphabet.forEach(function(letter) {
			var alphabetBtn = document.createElement("button");
			alphabetBtn.className = "abtn";
			alphabetBtn.innerHTML = letter;
			keyboard.appendChild(alphabetBtn);
		});
	}

	function activateKeyBoard() {
		var buttons = keyboard.getElementsByTagName("button");
		for (var i = 0; i < buttons.length; i++) {
			var element = buttons[i];
			element.disabled = false;
			element.addEventListener("click", buttonClick);
		}
	}

	function deactivateKeyBoard() {
		var buttons = keyboard.getElementsByTagName("button");
		for (var i = 0; i < buttons.length; i++) {
			var element = buttons[i];
			element.removeEventListener("click", buttonClick);
		}
	}

	function play() {
		lives = 10;
		word = getRandomWord();
		secretWord = word.split("").map(function() {
			return "_";
		});

		activateKeyBoard();
		renderLives();
		renderCurrentWord();
	}

	// Start hangman
	function init() {
		playBtn.addEventListener("click", play);
		renderKeyBoard();
		play();
	}

	init();
}

hangman();
