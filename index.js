function start() {

var r1 = Math.floor(Math.random() * 6) + 1;
var rdi1 = "images/dice"+r1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",rdi1);

var r2 = Math.floor(Math.random()*6)+1;
var rdi2 = "images/dice"+r2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",rdi2);

if(r1>r2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(r2>r1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Match draws";
}

}

