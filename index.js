var randomVariable1 = Math.floor(Math.random() * 6);
var randomVariable2 = Math.floor(Math.random() * 6);
var imglist = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
document.querySelector(".img1").setAttribute("src", imglist[randomVariable1]);
document.querySelector(".img2").setAttribute("src", imglist[randomVariable2]);
if (randomVariable1 > randomVariable2) {
    document.querySelector("h1").innerHTML = "✌Player 1 Wins!";
}
else if (randomVariable1 < randomVariable2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!✌";
}
else if (randomVariable1 === randomVariable2)
{
    document.querySelector("h1").innerHTML = "Draw!";
}