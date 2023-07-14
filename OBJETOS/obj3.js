const gato = {
    nombre:"valiente",
    duerme: true,
    edad:10,
    enemigos:["agua","perros"],
    
};
/*Recorrer Objeto con For In*/
console.log("For in")
for(let propiedad in gato){
    console.log(propiedad);
    console.log(gato[propiedad]);
    console.log(gato.propiedad);
}
/*Mostrar propiedades del objeto devolviendo un array con métdo values*/
console.log("Object Values")
console.log(Object.values(gato))
Object.values(gato).forEach((item) => console.log(item));
/*ver tambien
 Object.entries()
Object.key()
Object.getOwnPropertyNames()
*/

