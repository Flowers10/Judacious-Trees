//Holds most of the functions for things like buttons
function test() {
  HELLOS++;
}

window.setInterval(function() {
  html.getElementById('test').innerHTML = HELLOS;
})
