var lettersAccepted = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var form = document.querySelector("#form");


function validateInput(typedLetter){
	for(var i=0; i<lettersAccepted.length; i++){
		if(typedLetter == lettersAccepted[i]){
			lettersAccepted[i] = lettersAccepted[i].replace(lettersAccepted[i], "null");
			return true;
		}
	}
}



