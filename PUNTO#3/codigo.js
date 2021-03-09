let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerEstado);

function establecerEstado() {
  let eleccion = seleccionar.value;

  if (eleccion === 'Find_leat') {
    parrafo.textContent = 'Encuentra la hoja, pasa al estado Go home.';
  } else if (eleccion === 'Go_home') {
    parrafo.textContent = 'En la casa, pasa de nuevo al estado Find leat';
  } else if (eleccion === 'Find_leat.') {
    parrafo.textContent = 'Cursor de mouse, pasa al estado Run away';
  } else if (eleccion === 'Run_away') {
    parrafo.textContent = 'No hay cursor de mouse, pasa de nuevo al estado inicial "Find leat"';
  } else {
    parrafo.textContent = '';
  }
}