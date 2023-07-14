var nombreUser = "Taty"
var nombreUser = "Cristina"
//resultado Cristina y gran problema en programas extensos ya que permite crear mas de una vez la misma variable
let nombreU = "Taty";
//let nombreU = "Cris";
//si descomento ya me marca error por declarar 2 veces la misma variable
console.log(nombreUser, nombreU)
//let deja que cambie el valor de la variable
nombreU="Beatriz";
console.log(nombreU)
console.log("*********************")
var estado = true;
var estado = false;
console.log(estado);

let estado1 = true;
estado1 = false;
console.log(estado);


console.log("*********************")
//SCOPE:donde va a vivir la variable o donde podrá accederse a ella.

//con var se sobreescribe, es global
var estado = true
if (estado) {
    var estado = false
}
console.log(estado)
//con let solo se limite o tiene alcance en el bloque donde se utiliza, con let cada variable es diferente
let estado2 = true
if (estado2) {
    console.log("Entro al if entonces:")
    let estado2 = false
    console.log(estado2)
}
console.log("Fuera del if:")
console.log(estado2)
console.log("************************")
for (let i=0;i<5;i++){
    console.log(i);
}//let vive dentro del for por eso es de bloque,
//siempre se utiliza let en el for, no const!
//console.log(i);//si descomento da error xq i no existe fuera del for
let estadoA= true;
estadoA=false;//no da error, si lo permite

//CONST variable es de solo lectura, constante, no se puede modificar, no reasigna valor a la varible
const estado =true;
//estado=false;//error no funciona
//const es más rápido que let y var

/*for (const i=0;i<5;i++){
    console.log(i);
}*/
//solo muestra i una vez xq lo lee una vez, no reasigna varlor

if(estado){
    const estado = false
    console.log(estado)//aquí si funciona
}
console.log(estado)