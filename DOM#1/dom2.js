/*a modificar el DOCUMENTO*/
const h1 = document.getElementById("h1DOM")
console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);
//Cambiando h1
h1.textContent = "TITULO desde JS"
// "el" indica elemento
const el = document.getElementById("h1DOM");
el.textContent = "NUEVO TITULO desde JS"
h1.style.backgroundColor = "blue";
h1.style.color ="violet";
h1.style.textAlignLast = "center";