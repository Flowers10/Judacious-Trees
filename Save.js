
function save() {
  var string = HELLOS.toString()
  var b64 = btoa(string);
  var unicode = atob(b64);
}

window.setInterval(function() {
  save();
  document.getElementById('b64').innerHTML = b64;  
},100)
