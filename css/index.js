// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// var fixed = document.getElementById('fixed');
// window.onscroll= function(){
//   if(window.pageYOffset>100){
//     fixed.style.position= "fixed";
//     fixed.style.top= 0;
//   }else{
//     fixed.style.position= "absolute";
//     fixed.style.top=100
//   }
// }
window.onscroll = function() {myFunction()};

var fixed = document.getElementById("myfixed");
var sticky = fixed.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    fixed.classList.add("sticky");
  } else {
    fixed.classList.remove("sticky");
  }
}