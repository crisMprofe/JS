const formulario = document.getElementById('formulario');
//const formularioQS = document.querySelector('#formulario');
//const formularioQSF = document.querySelector('form');

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

//const userName = document.querySelector("input[name='userName']");
//const userEmail = document.querySelector("input[name='userEmail']");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //solo letras y con acentos
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const alertCorrecto = document.getElementById("alertCorrecto");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const mensajeEnviadoExitoso = ()=>{
    alertCorrecto.classList.remove('d-none');
    alertCorrecto.textContent = "Datos enviados correctamente";
} 
const mensajesError = (errores) => {
    errores.forEach( item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
       
    });

}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();//evita lo q hace navegador por defecto es decir el GET
   //1 console.log("formulario procesado");
    //2console.log(userName.value);
    //3console.log(userEmail.value);

    alertCorrecto.classList.add('d-none');

    console.log(regUserName.test(userName.value));
    console.log(regUserEmail.test(userEmail.value));

    const errores = [];
    //detecta espacios en blanco con metodo trim devulve true
    //console.log(!userName.value.trim());

    if(!regUserName.test(userName.value) || !userName.value.trim()){
       
        userName.classList.add("is-invalid")
        //console.log("Formato no válido")
        //return

        errores.push({
            tipo: alertName,
            msg: "Formato no válido en el  nombre, solo letras",
        });
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    };
    
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        //console.log("Formato email no válido")
       // return
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Formato no válido en el email ingresado",
        });
    }else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    };


     if(errores.length !==0){
        mensajesError(errores)
        return
     }
    console.log("formulario enviado");
    mensajeEnviadoExitoso();
});
//revisar documentqacion classList y className javaScript