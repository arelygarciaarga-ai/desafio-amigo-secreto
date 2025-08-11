// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres ingresados
let amigos = [];
// Agrega el nombre escrito en el input a la lista y la muestra
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, ingrese un nombre válido');
    return;
  }

  amigos.push(nombre);
  input.value = '';        // limpia el campo
  actualizarLista();       // refresca la lista en pantalla
}

// Dibuja la lista de nombres en el <ul id="listaAmigos">
function actualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';
  amigos.forEach((n) => {
    const li = document.createElement('li');
    li.textContent = n;
    ul.appendChild(li);
  });
}
