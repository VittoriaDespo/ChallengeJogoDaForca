var boxLetters = document.querySelector(".container-letras");

var displayWrongLetters = document.querySelector(".display-letras-erradas");

function winnerOrLoser(mistake, success){

	if(mistake < 7){
		drawHangMan(mistake);

	}else if(mistake >=7){
		drawFinalHangMan();

		displayMessageLoser();
	}

	if(success == wordLength){

		pincel.clearRect(536,110,110,260);

		drawHappyHangMan();

		displayMessageWinner();
	}

}


function displaySecretWord() {

	return secretWord;
}


function displayMessageWinner() {
	boxLetters.innerHTML = displaySecretWord();

	displayWrongLetters.textContent = "Você Venceu. Parabéns!";
	displayWrongLetters.classList.remove("display-letras-erradas");
	displayWrongLetters.classList.add("letras-erradas");

	input.style.display = "none";

}

function displayMessageLoser(){
	boxLetters.innerHTML = displaySecretWord();

	displayWrongLetters.textContent = "Você Perdeu!";
	displayWrongLetters.classList.remove("display-letras-erradas");
	displayWrongLetters.classList.add("letras-erradas");

	input.style.display = "none";
}

