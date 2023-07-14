console.log("🤔😘😍")
/*PROPIEDADES*/
/*console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain); 
/*MÉTODOS*/
/*console.log(document.getElementById("h1DOM"));
console.log(document.getElementById("h1DOM").textContent);//trae el texto contenido del h1
console.log(document.getElementById("h1DOM").innerHTML);//trae el texto contenido del h1, no es recomendable
/*Si movemos el script en html al head nos dará error, una solución sería (aunque no es recomendable el script en el head):*/
/*document.addEventListener("DOMContentLoaded", () => {
    console.log(document.getElementById("h1DOM"));
console.log(document.getElementById("h1DOM").textContent);//trae el texto contenido del h1
console.log(document.getElementById("h1DOM").innerHTML)
})
/*otra alternativa en el html agregar atributo al script defer hace que se cargue el html y el script se ejecuta en segundo plano*/
console.log(document.getElementById("h1DOM"));
console.log(document.getElementById("h1DOM").textContent);
console.log(document.getElementById("h1DOM").innerHTML);