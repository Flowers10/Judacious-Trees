var save = HELLOS.toString()
function save() {
  var b64 = btoa(save);
  var unicode = atob(b64);
}

windo.setInterval(function() {
    document.getElementSById('b64').innerHTML = b64;
},100)
