//! 1) Cambiar el primer "Hola Mundo" a "Adiós"
const primerH1 = document.querySelector('h1');
primerH1.textContent = 'Adiós';

//! 2) Cambiar el color del segundo H1 a naranja
const todosLosH1 = document.querySelectorAll('h1');
if (todosLosH1[1]) {
  todosLosH1[1].style.color = 'orange';
}

//! 3) Crear un nuevo encabezado 
const clickable = document.createElement('h1');
clickable.textContent = 'Haz clic en mí para ponerme marrón';
clickable.style.cursor = 'pointer';
clickable.addEventListener('click', () => {
  clickable.style.color = 'brown';
});
document.body.appendChild(clickable);