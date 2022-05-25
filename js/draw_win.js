var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function drawHappyHangMan(){

    pincel.strokeStyle = "#6F432A"
    pincel.lineWidth = 7
    pincel.beginPath();
    pincel.moveTo(600, 105);
    pincel.lineTo(600, 120);
    pincel.stroke();


    pincel.strokeStyle = "black"
    pincel.beginPath();
    pincel.arc(600, 195, 30, 0, 2 * 3.14);
    pincel.stroke();

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='black';
    pincel.fillText("<",607,195);

    pincel.font='bold 15px Verdana';
    pincel.fillStyle='black';
    pincel.fillText(">",580,195);

    pincel.lineWidth = 2
    pincel.beginPath();
    pincel.arc(600, 205, 10, 0, Math.PI, false);
    pincel.stroke();


    pincel.lineCap = "round"
    pincel.strokeStyle = "black"
    pincel.lineWidth = 7
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

    pincel.clearRect(536,228,60,60);

    pincel.clearRect(604,228,60,60)

    drawArms(y);
}


function drawMessageWinner(){

    pincel.font='bold 70px Gloria Hallelujah,cursive';
    pincel.fillStyle="#d80000";
    pincel.fillText("Você Venceu. Parabéns!",100,700);

}
