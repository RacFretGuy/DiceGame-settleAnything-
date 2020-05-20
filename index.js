var random=Math.floor((Math.random()*6)+1);
var random1=Math.floor((Math.random()*6)+1);
document.querySelector("img.img1").setAttribute("src","images/dice"+random+".png"); 
document.querySelector("img.img2").setAttribute("src","images/dice"+random1+".png"); 
if( random>random1){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(random1>random){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}
