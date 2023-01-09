
var random = Math.floor((Math.random() * 6)) + 1;

var randomImage = "images/dice" + random + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage);

var random2 = Math.floor((Math.random() * 6)) + 1;

var randomImage2 = "images/dice" + random2 + ".png"

image2.setAttribute("src", randomImage2);

if (random > random2) {
    document.querySelector("h1").innerHTML = "Player 1 won!";
} else if (random2 > random) {
    document.querySelector("h1").innerHTML = "Player 2 won!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}


