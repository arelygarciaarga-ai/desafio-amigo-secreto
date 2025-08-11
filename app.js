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
// Sortea un nombre al azar y lo muestra en <ul id="resultado">
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Primero agrega al menos un nombre');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `🎉 Amigo secreto: ${ganador}`;
  resultado.appendChild(li);
}
