console.log(document.getElementById("h1DOM"));

console.log(document.querySelector("#h1DOM"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));
console.log(document.querySelector(".text-danger"));//solo va a seleccionar el primer elemento que coincida
console.log(document.querySelectorAll(".text-danger"));//selecciona todos los selectores clases con ese nombre
console.log(document.querySelectorAll(".container .text-danger"));//solo selecciona lo del contenedor, tambien se aplica a document.querySelector()

//aclaración el querySelector()es mas nuevo y mas lento, el getElementById es más viejo y más rápido, usar el que creas conveniente y te sea fácil en un principio