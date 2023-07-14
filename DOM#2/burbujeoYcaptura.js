//Capturar cada div
/*1 const padre = document.querySelector('.border-primary');
const hijo = document.querySelector('.border-secondary');
const nieto = document.querySelector('.border-danger');
//agrego evento y veremos que del elemento mas interno 'nieto' se propaga al mas externo padre, 
//entonces addventListener recibe tercer parametro true y se invierte la propagacion, x defecto siempre está en false no es necesario colocarlo

//no es optimo
padre.addEventListener('click', ()=>{
    console.log("Me diste click padre");
}, true);

hijo.addEventListener('click', ()=>{
    console.log("Me diste click hijo");
}, true);

nieto.addEventListener('click', ()=>{
    console.log("Me diste click nieto");
}, true);1*/

// 2 podemos hacer:
/*const cajitas = document.querySelectorAll('.border')
cajitas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log("diste click");
    });
});*/
//para detener la propagacion agregamos e evento
//cancelar un evento si este es cancelable
/*3const formulario = document.querySelector("form");
formulario.addEventListener("click", (e) => {
    e.preventDefault();//para que se quede el mensaje mientras se envia x get
    console.log("click");
});//submit manda x get los datos */

/*4const enlace = document.querySelector("a");
enlace.addEventListener("click", (e) => {
    e.preventDefault();//para que se quede el mensaje mientras se detiene el envio
    console.log("click");
});4*/
//*5vuelvo a las cajitas delegacion de eventos:
//tres formas de acceder al elemento por medio de la DELEGACION DE EVENTOS 
//a- container

//const container = document.querySelector('.container');
//container.addEventListener("click", (e) => {
    //b- document
document.addEventListener("click", (e) => {
    //console.log(e.target);
    //console.log(e.target.id);//acceso x el id

    if (e.target.id === "padre"){
        console.log("diste click al padre");
    }
    //console.log(e.target.matches(".border-secondary"));
    if (e.target.matches(".border-secondary")){
        console.log("diste click en el hijo");
    }
    //console.log(e.target.dataset);//dataset accedo a los data
    //console.log(e.target.dataset.div);//identifico a cada data div
    if (e.target.dataset.div === "divNieto") {
        console.log("diste click en nieto");
    }


});

//sino quiero acceder a un contenedor puedo acceder a todo el documento y hacer la delegacion de eventos//