var text = document.querySelector(".texto");

var buttonSalvar = document.querySelector("#button-salvar");

var Regex = /^[aA-zZ\s]+$/;


buttonSalvar.addEventListener("click",function(){
 	var value = text.value;

	if(Regex.test(value) == true){
		var newWord = value.toUpperCase();

		sessionStorage.setItem("addedWord", newWord);
		window.location.href = "game.html";
	}

	else{
		alert();
		
	}

});

function alert(){
	var value = text.value;

	var alertError = document.querySelector("#mensagem-erro");

	alertError.textContent = "Texto Inválido! Apenas letras sem acento";

	if(value == ""){
		alertError.textContent = "Digite uma palavra";

	}



	text.addEventListener("input", function(){
			alertError.innerHTML = "";

	});	
}

