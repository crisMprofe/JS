const h1 = document.getElementById("h1DOM");
h1.textContent = "DOM";
h1.style.color = "pink";
h1.style.textShadow = "2px 2px 0.6px blue";
const boton = document.querySelector('.btn-primary');//si estuviera dentro de un div (documento) entonces ('.btn .btn-primary')

boton.addEventListener('click', ()=>{
    console.log("Hiciste Click")
    h1.textContent = "Ahora vamos a ver Eventos"
    h1.style.textShadow = "-2px 3px 0.6px red";
})