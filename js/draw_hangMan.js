var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function drawGallow(){

    pincel.strokeStyle = "#6F432A"
    pincel.lineWidth = 10
    pincel.beginPath();
    pincel.moveTo(400, 400);
    pincel.lineTo(660, 400);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(450, 400);
    pincel.lineTo(450, 90);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(440, 100);
    pincel.lineTo(620, 100);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(450, 360);
    pincel.lineTo(425, 400);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(450, 360);
    pincel.lineTo(475, 400);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(450, 130);
    pincel.lineTo(490, 100);
    pincel.stroke();

}

function drawHangMan(mistake){

    if (mistake == 1){
    	pincel.strokeStyle = "#6F432A"
    	pincel.lineWidth = 7
		pincel.beginPath();
	    pincel.moveTo(600, 105);
	    pincel.lineTo(600, 120);
	    pincel.stroke();

    }else if(mistake == 2){
    	pincel.strokeStyle = "black"
		pincel.beginPath();
    	pincel.arc(600, 150, 30, 0, 2 * 3.14);
  		pincel.stroke();

    }else if(mistake == 3){
    	pincel.lineCap = "round"
    	pincel.strokeStyle = "black"
    	pincel.lineWidth = 7
    	pincel.beginPath();
    	pincel.moveTo(600, 180);
    	pincel.lineTo(600, 300)
   	 	pincel.stroke();

    }else if(mistake == 4){
	    pincel.beginPath();
	    pincel.moveTo(600, 200);
	    pincel.lineTo(550, 240);
	    pincel.stroke();

    }else if(mistake == 5){
	    pincel.beginPath();
	    pincel.moveTo(600, 200);
	    pincel.lineTo(650, 240);
	    pincel.stroke();

    }else if(mistake == 6){
	    pincel.beginPath();
	    pincel.moveTo(600, 300);
	    pincel.lineTo(550, 360);
	    pincel.stroke();
    }

}








    

    

    

