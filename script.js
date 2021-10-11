// tombol burger untuk menu
let hamburger = document.getElementById("hamburger");
let navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("display_block");
});

// tombol back to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}