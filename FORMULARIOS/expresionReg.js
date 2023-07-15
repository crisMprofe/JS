//const regExp = /blueweb/i;
//patron/flag
/*en la const regExp (nombre de la const) 
indico la expsion rgular que quiero buscar y 
verificar si existe o la encuentra*/

//const regExp = /[ue]/gi;
const regExp = /blueeew|blueweb/gi;//**esta ó *1
//console.log(regExp.test("Ignacio"));
console.log(regExp.test("blueweb"));//**


//const regExpObjeto = new RegExp("blueweb" ,"i");

//const regExpObjeto = new RegExp("blueeew|blueweb" ,"i");//*1
//console.log(regExpObjeto.test("blueeeeeweb"));//*1devuelve true/false si lo encuentra en la web



const regExpr = /[A-Za-z0-9]/i;
console.log(regExpr.test("1987$$$$$%🍳"));//"blueweb 1587" true vario mientras tenga letras y nros va a dar true por mas q le agregue caracteres distintos

const regExpLiteral = /bluweb|blueweb/gi;
const str = "blueweb";

console.log(regExpLiteral.test(str));//=true

const regExpLiteral1 = /[0-9]/gi;
const str1 = "234";

console.log(regExpLiteral.test(str1));//=false

//solo números
const regExpL = /^\d+$/gi;
const str2 = "bluuweb123";

console.log(regExpL.test(str2));
console.log(regExpL.test(1589));

//solo leras:
const regExpLi = /^[a-zA-Z ]*$/;
const str3 = "bluuweb";

console.log(regExpLi.test(str3));
console.log(regExpLi.test("blie123"));
//con tildes:
const regExpL1 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const str4 = "bluuweb";

console.log(regExpL1.test(str4));
console.log(regExpL1.test("blié"));

//emails
const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const str5 = "bluuweb.com";

console.log(regExpEmail.test(str5));
console.log(regExpEmail.test("cristinbmaia@gmail.com"));