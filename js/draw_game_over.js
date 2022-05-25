function drawFinalHangMan(){

	pincel.beginPath();
	pincel.moveTo(600, 300);
	pincel.lineTo(650, 360);
	pincel.stroke();

    pincel.strokeStyle = "black"
    pincel.beginPath();
    pincel.arc(600, 150, 30, 0, 2 * 3.14);
    pincel.stroke();

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='black';
    pincel.fillText("x",607,150);

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='black';
    pincel.fillText("x",585,150);

}

function drawMessageGameOver(){

    pincel.font='bold 70px Gloria Hallelujah,cursive';
	pincel.fillStyle="#d80000";
	pincel.fillText("Você perdeu!",300,700);

}