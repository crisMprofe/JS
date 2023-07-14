const inputColor = document.querySelector("#inputColor");
const botonV = document.querySelector("#btnVisualizar");
const textoColor = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor");
//probar las selecciones que no aparezcan null
/*console.log(inputColor);
console.log(botonV);
console.log(textoColor);
console.log(cardColor);*/

console.log(inputColor.value);
botonV.addEventListener("click", () =>{
    
    console.log("me diste click");
    console.log(inputColor.value);

    textoColor.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;

    //para que el codigo color quede en portapapeles, luego se abordará 
    //este tema navigator, then catch

    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});
