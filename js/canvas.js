var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function drawGallow(){

    pincel.strokeStyle = "#f5f5f5"
    pincel.lineWidth = 7
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
    	pincel.strokeStyle = "#f5f5f5"
    	pincel.lineWidth = 7
		pincel.beginPath();
	    pincel.moveTo(600, 105);
	    pincel.lineTo(600, 120);
	    pincel.stroke();

    }else if(mistake == 2){
    	pincel.strokeStyle = "#f5f5f5"
        pincel.lineWidth = 5
		pincel.beginPath();
    	pincel.arc(600, 150, 30, 0, 2 * 3.14);
  		pincel.stroke();

    }else if(mistake == 3){
    	pincel.lineCap = "round"
    	pincel.strokeStyle = "#f5f5f5"
    	pincel.lineWidth = 5
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

function drawFinalHangMan(){

    pincel.beginPath();
    pincel.moveTo(600, 300);
    pincel.lineTo(650, 360);
    pincel.stroke();

    pincel.strokeStyle = "#f5f5f5"
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.arc(600, 150, 30, 0, 2 * 3.14);
    pincel.stroke();

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='white';
    pincel.fillText("x",607,150);

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='white';
    pincel.fillText("x",585,150);

}

function drawHappyHangMan(){

    pincel.strokeStyle = "#f5f5f5"
    pincel.lineWidth = 7
    pincel.beginPath();
    pincel.moveTo(600, 105);
    pincel.lineTo(600, 120);
    pincel.stroke();


    pincel.strokeStyle = "#f5f5f5"
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.arc(600, 195, 30, 0, 2 * 3.14);
    pincel.stroke();

    pincel.font='bold 15px Verdana';
    pincel.fillStyle="white";
    pincel.fillText("<",607,195);

    pincel.font='bold 15px Verdana';
    pincel.fillStyle="white";
    pincel.fillText(">",580,195);

    pincel.lineWidth = 2
    pincel.beginPath();
    pincel.arc(600, 205, 10, 0, Math.PI, false);
    pincel.stroke();


    pincel.lineCap = "round"
    pincel.strokeStyle = "#f5f5f5"
    pincel.lineWidth = 5
    pincel.beginPath();
    pincel.moveTo(600, 230);
    pincel.lineTo(600, 338)
    pincel.stroke();

    setInterval(drawMoviment, 10);


    pincel.beginPath();
    pincel.moveTo(600, 240);
    pincel.lineTo(650, 280);
    pincel.stroke();


    pincel.beginPath();
    pincel.moveTo(598, 340);
    pincel.lineTo(550, 393);
    pincel.stroke();


    pincel.beginPath();
    pincel.moveTo(602, 340);
    pincel.lineTo(650, 393);
    pincel.stroke();

}


function drawArms(y){
    pincel.beginPath();
    pincel.moveTo(600, 240);
    pincel.lineTo(550, y);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(600, 240);
    pincel.lineTo(650, y);
    pincel.stroke();

}

var y = 280;
var movimento = true;

function drawMoviment(){
    if(y < 235){
        movimento = false;
    }else if(y == 280){
        movimento = true;
    }

    if(movimento){
        y--
    }else{
        y++
    }

    pincel.clearRect(537,228,60,60);

    pincel.clearRect(603,228,60,60)

    drawArms(y);
}











    

    

    

