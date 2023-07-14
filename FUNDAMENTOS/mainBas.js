function observo() {
    alert("Hola te estoy mirando");
}
//************************
/*
alert("Te sigo mirando") 
alert("string es texto");
console.log("Esta es la consola 😍");/*WINDOWS . PONE EMOTICON*/
console.log('🤩')
console.log('tambien "es" string');
console.log(120);
console.log(20.3);
console.log(36,3);//parámetros
console.log(true);
/*VARIABLES - declararlas primero
nombres sin espacios se recomienda camelCase, 
identifiquen el tipo de dato y para qué lo uso
evitar ñ tildes y signos extraños
*/
/*let nombreUser = "Matilda"
let x = 35;//x no me dice a que se refiere, entonces:
let edad = 35;
/*
CONCATENAR
unir string mas números y texto nuevamente, etc
*/
/*console.log ("El nombre de usuario es: " + nombreUser)
console.log ("El usuario: " + nombreUser + " " +"tiene", + " " + edad + " " + "años");

let num1 = 56;
let num2 = 85;
console.log( num2 + num1);//¿Qué sucede?

//PROMPT método para ingresar datos,
// lo ideal es hacerlo con input en html y leer ese dato con JS
let nombreNvoUser = prompt("Ingresa tu nombre");
console.log(nombreNvoUser);
let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese un segundo número"); 
let resultado = numero1 + numero2;
console.log(resultado)
console.log(typeof numero1);
/*lo que ingreso con prompt es string, entonces debo convertirlo a numero
en la consola compruebro escribo numero1 x
 ejemplo y me va a mostrar el dato que corresponde,  para poder 
 utilizarlos en un calculo aplico parseInt(string, base)
*/
/*let resultado1 = parseInt(numero1) + parseInt(numero2);
console.log(resultado1);
//lo ideal y prolijo serìa
let numeroU = parseInt(prompt("Ingrese un número"));
let numeroD = parseInt(prompt("Ingrese un segundo número")); 
let resultadoA = numeroU + numeroD;
console.log("primer numero:"+" " +numeroU+ " "+ "segundo numero:" + " "
 + numeroD+ "las suma es:"+ " "+ resultadoA)
*/
//OPERADORES ARITMETICOS
let resultadoN = 50 / 3;
console.log(resultadoN)
let resultadoN1 = 50 % 3;
console.log(resultadoN1)
let resultadoS = 2 * (100 / 5) + 10;
console.log(resultadoS);
//1 parentesis interno division luego multiplico y x ultimo sumo
//OPERADORES RELACIONALES
let resul1= 10 < 20;
console.log(resul1);
let resul2 = 10 == "10";
console.log(resul2);//compara el contenido
let resul3 = 10 === "10";
console.log(resul3);//exactamemte igual
let resul4 = 10 != 10;
console.log(resul4)
//OPERADORES LÓGICOS
let resul5 = true && true;
console.log(resul5);
let uno = 1;
let dos = 2;
let resul6 = uno == 2 && dos == 2;
console.log(resul6);