var mistake = 0;
var success = 0;

function showLetterSecretWord(letter){
	isRightLetter = false;
	while(chosenWord.match(letter)){
		var position = chosenWord.indexOf(letter);
		var divLetters = document.querySelector("#letra" + position);
		divLetters.textContent = letter;
		chosenWord = chosenWord.replace(letter, "0");
		success++;
		isRightLetter = true;
	}
}

function showWrongLetter(letter){
	var displayWrongLetters = document.querySelector(".display-letras-erradas");
	displayWrongLetters.innerHTML += letter + "&nbsp";
	mistake++;
}