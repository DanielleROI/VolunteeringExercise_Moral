/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



window.addEventListener("DOMContentLoaded", setup);
// window.addEventListener("resize", resize);
function setup(){

  document.getElementById("Communityevents").onmouseover = function() {
  mouseOver();
};
document.getElementById("Communityevents").onmouseout = function() {
  mouseOut();
};

function mouseOver() {
  document.getElementById("Communityevents").style.color = "rgb(128,0,0)";
}

function mouseOut() {
  document.getElementById("Communityevents").style.color = "black";
}




// react to page resize
function resize(){
	// get window width
  var wid = window.innerWidth;
  var hei = window.innerHeight;
}
}








