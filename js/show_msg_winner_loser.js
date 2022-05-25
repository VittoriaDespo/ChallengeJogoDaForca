

function winnerOrLoser(mistake, success){

	if(mistake <= 7){
		drawHangMan(mistake);

	}else if(mistake >=7){
		drawFinalHangMan();

		displayLoser();
	}

	if(success == wordLength){

		pincel.clearRect(536,110,110,260);
		drawHappyHangMan();

		displayWinner();
	}

}


function displaySecretWord() {

	return secretWord;
}


function displayWinner() {
	var boxLetters = document.querySelector(".container-letras");
	boxLetters.innerHTML = displaySecretWord();

	var displayWrongLetters = document.querySelector(".display-letras-erradas");
	displayWrongLetters.textContent = drawMessageWinner();

	input.style.display = "none";

}

function displayLoser(){
	var boxLetters = document.querySelector(".container-letras");
	boxLetters.innerHTML = displaySecretWord();

	var displayWrongLetters = document.querySelector(".display-letras-erradas");
	displayWrongLetters.textContent = drawMessageGameOver();

	input.style.display = "none";
}