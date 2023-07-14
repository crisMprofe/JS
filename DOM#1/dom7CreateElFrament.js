const liste = document.querySelector('#liste')//1
const fragment = document.createDocumentFragment();//6
const liTemplate = document.querySelector('#liTemplate');//2
//primero sin fragment y array, luego trabajo con el array y fragment en este ejemplo
//se recomienda ahora clonar, con la propiedad content genera un fragment
//9 agrego evento, para que funcione en la const clone agrego firstElementChild
//const clickPaises = () => console.log("me diste click");
//10
const clickPaises = (e) => console.log("me diste click", e.target);

const arrayPaises = ["Argentina","Perú", "Bolivia", "Colombia", "Uruguay"];//7
//8
arrayPaises.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;

    clone.addEventListener("click", clickPaises);
    fragment.appendChild(clone);
})
liste.appendChild(fragment);





/*


const clone = liTemplate.content.cloneNode(true);//3
//console.log(clone.querySelector('.text-primary'));

clone.querySelector(".text-primary").textContent = "agrego a través de un template";//4

liste.appendChild(clone);//5*/