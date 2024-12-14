var randomNumber1=Math.floor(Math.random()*6)+1;
var diceimg="images/dice"+ randomNumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",diceimg);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceimg2="images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win";
}else{
    document.querySelector("h1").innerHTML="It's A DRAW";
}
