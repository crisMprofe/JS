const lista = document.querySelector('#lista')//1

const arrayPaises = ["Argentina","Perú", "Bolivia", "Colombia"]//4

/*arrayPaises.forEach(pais => {
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);//genera reflow
})

const lia = document.createElement('li')//Elem que quiero crear
lia.textContent = "Nuevo Elemento desde JS"
console.log(lia)//2

//lista.appendChild(li);//3*/

arrayPaises.forEach((pais) => {
    //lista.innerHTML = `<li>${pais}</li>`;//genera reflow, no hace escapada de html, borra y vuelve a cargar todo
    lista.innerHTML += `<li>${pais}</li>`;
});