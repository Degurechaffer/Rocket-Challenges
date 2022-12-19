import './style.css'

const toggle = document.getElementById("themeinput");

toggle.addEventListener("click", function() {
  var element = document.body;
  element.classList.toggle("dark-mode");
});
