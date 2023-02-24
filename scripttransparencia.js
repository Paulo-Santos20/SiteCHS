var sublistas = document.querySelectorAll('.secundary-container ul ul');
var listaPrincipal = document.querySelectorAll('.secundary-container ul > li');

for (var i = 0; i < listaPrincipal.length; i++) {
  listaPrincipal[i].addEventListener('click', function() {
    var sublista = this.querySelector('ul');
    if (!sublista) return;
    for (var j = 0; j < sublistas.length; j++) {
      if (sublistas[j] != sublista) {
        sublistas[j].style.display = 'none';
      }
    }
    if (sublista.style.display == 'none') {
      sublista.style.display = 'block';
    } else {
      sublista.style.display = 'none';
    }
  });
}

