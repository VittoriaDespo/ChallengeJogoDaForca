function startGame(){
	typedLetter = input.value;
	playing = true;
	if(validateInput(typedLetter)){
		var letter = typedLetter.toUpperCase();
		form.reset();
		showLetterSecretWord(letter);
		if (isRightLetter == false){
			showWrongLetter(letter);
		}
		winnerOrLoser(mistake, success);
	}else{
		form.reset();
	}
	
}

input.addEventListener("input", function(){
	startGame();
});