const btn = document.querySelector('#boton'); 
const nav = document.querySelector('#navega');

btn.addEventListener("click", () => {
    navega.classList.toggle('activo');
})