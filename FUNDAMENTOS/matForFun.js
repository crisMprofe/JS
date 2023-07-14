console.log("vinculado")

//ARRAY hacemos una lista/colección - de frutas
let frutas =["banana", "naranjas", "sandía", "peras", 9, "uvas", "durazno"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);

//*FOR*
/*for (indice = 0;punto de escape/condición i <= tamaño del array;
incrementador i++){
 instrucciones
 mostrar en pantalla console.log(i)
}*/

/*for (let i = 0; i <= 5; i++ ){
    console.log("Elemento:" + i);
    console.log("Fruta:" + frutas[i]);
}*/
//para hacer dinámico mi lista, ya que agrego elementos
//y los tengo que mostar aplico en la condición length
console.log("Frutas");
for (let i = 0; i <= frutas.length; i++ ){
    console.log("Elemento:" + i);
    console.log("Fruta:" + frutas[i]);
}

//FOR OF
// itero mas rápido una matrix, variable let es lo que toma de la
//lista en su posición osea cada elemento de la lista- Itera sobre un objeto iterable:matrix
/*for (let fruta of frutas){
    console.log(fruta);
}
let nombreUsuario = "Ignacio"
let edad = 52;

for (let letra of nombreUsuario){
    console.log(letra);
}
//en la consola: inspector hacer:
//frutas[symbol.iterator] para saber si un objeto es iterable
//da resultado f values(){native code}, values me indica que es un obj iterador
//of funciona para objetos iterables
/*for (let letra of edad){
    console.log(letra);
}*/
//FOR IN
//itera sobre las propiedades de un objeto, muestra los indices
/*for (let fruti in frutas){
    console.log(fruti);
}*/
//******************************** */
//FUNCIONES
/*saludar ();///hoisting en la fase de compilación diclaración de var y funciones las 
//mueve al comienzo

function saludar() {
    let nombbre = prompt("Ingresa tu nombre:",)
    console.log("Bienvenido!"+ " " + nombbre);
}

saludar();*/
//FUNCION SIN RETORNO
/*
function saludar(nombreU) {
    
    console.log("Bienvenido!"+ " " + nombreU);
}
saludar("Hugo");



//FUNCION CON RETORNO
function saludarU(nombreUs) {
    return ("Bienvenido!!!  " + nombreUs)
}

console.log(saludarU("Franco  Daniel"));

//función sumar
function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numeroUno = prompt("Ingrese primer número  ");
let numeroDos = prompt("Ingrese segundo número  ");

let resultado = sumar(numeroUno, numeroDos);

console.log("El total es: " + resultado);// o
console.log("el resultado de la suma es:" 
+ sumar(numeroUno, numeroDos));*/
