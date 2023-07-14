//IF...ELSE
/*let textUser= prompt("Escriba 'javascript'");

if (textUser === "javascript") {
    console.log("OK MUY BIEN ESCRITO");
} else {
    console.log("DEBES CORREGIR LA ESCRITURA");
}*/
/*
let numUsuario = prompt("Ingrese numero del 1 al 10");
//SI LO DEJO ASÌ SIN CONVERTIR FUNCIONA PERO EN PROGRAMAS DE MAYOR 
//COMPLEJIDAD DARÍA ALGUN ERROR ENTONCES APLICAR ParseInt

//console.log(numUsuario + " Es: " + typeof numUsuario);

//console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
}
*/
/*
********* ****************/
//SWITCH
/*let opcUser = prompt(`Elija opción:
1: Libros
2: Películas
3: Juegos
`);
console.log(opcUser)
switch (opcUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}*/
//WHILE
/*let numero = 1;
while (numero <= 10){
    console.log(numero)
    //numero = numero + 1
    numero ++

}
console.log('fin numero' + numero);*/
//funciones - mathRandom
let numeroMaquina = Math.floor(Math.random()* (10 - 1)) + 1;
console.log(numeroMaquina);

let vidas = 3
let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));

while( numeroMaquina !== numeroUsuario && vidas > 1){
     //operador ternario
     //let mensaje = (condicion) ? true : false
     let mensaje = (numeroMaquina > numeroUsuario) ? "El número Maquina es mayor" : "El numero Maquina es menor";

    
    
    console.log("Error te equivocaste!!!" + mensaje);
     numeroUsuario = parseInt(prompt("numero del 1 al 10"));
     vidas--;

}
if (numeroMaquina === numeroUsuario){
    console.log("Ganaste 😍" + " " + numeroMaquina);
} else {
    console.log("Perdiste 🤔" + " " + numeroMaquina);
}
//con el condicional solo valido si perdiste o ganaste adivinando el numero
// agrego while para contar las vidas
