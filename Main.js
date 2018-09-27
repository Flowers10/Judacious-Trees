//Holds most of the functions for things like buttons
let HELLOS = 0;

function test() {
  HELLOS++;
}

window.setInterval(function() {
  html.getElementById('test').innerHTML = HELLOS;
},100)
