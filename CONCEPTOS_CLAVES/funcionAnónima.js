//funcion declarativa
//traigo un numero aleatorio entero
console.log(numeroAleatorio(10,21))

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min)) + min
}

//funcion expresada, lo que se retorna se va a una variable

const numAzar = function(min, max){
    return Math.floor(Math.random()*(max - min)) + min
};
console.log(numAzar(100,201));
//Hoisting, hace un barrido y luego ejecuta 

//funcion Flecha Arrow functions
console.log("*********************")
console.log("Arrow Functions")
const numeroFlecha = (min,max) => {
    return Math.floor(Math.random()*(max - min)) + min
}
console.log(numeroFlecha(20,50));
const numeroFlex = (min,max) =>  Math.floor(Math.random()*(max - min)) + min //puedo agregar() al proceso
console.log(numeroFlex(20,50));

const numFlex = max =>  Math.floor(Math.random()*(max - 1)) + 1 //puedo sacar() al parámetro cuando es uno solo
console.log(numFlex(15));//un solo parametro y estatico el random

const numFlecha = (min,max = 65) =>  Math.floor(Math.random()*(max - min)) + min //puedo enviar un solo parámetro e indicar el otro hasta qué valor puede alcanzar tanto min como el max
console.log(numFlecha(8)); 

const numFle = (min = 14,max = 85) =>  Math.floor(Math.random()*(max - min)) + min //puedo invocar la función sin parámetros
console.log(numFle()); 

const numF = (min = 1,max = 100) =>  Math.floor(Math.random()*(max - min)) + min //puedo invocar la función sin uno de los parámetros indicando null o undefined
console.log(numF(undefined,50)); 