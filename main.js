function keyInfo(e) {
  var code = document.getElementById('code');
  var key = document.getElementById('key');
  var keycode = document.getElementById('keycode');

  code.innerHTML = e.code;
  key.innerHTML = e.key;
  keycode.innerHTML = e.keyCode;
}

window.addEventListener('keydown', keyInfo);
