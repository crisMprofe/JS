//evitar el reflow
const lista = document.querySelector('#lista')//1

const arrayPaises = ["Argentina","Perú", "Bolivia", "Colombia"]//4

const fragment = document.createDocumentFragment();

arrayPaises.forEach(pais => {
    const li = document.createElement("li");
    li.textContent = pais;
    fragment.appendChild(li);
})
lista.appendChild(fragment);


//insertBefore() inserta un nodo hijo antes

const arrayPaisesA = ["Argentina","Perú", "Bolivia", "Colombia"]//4

const fragmento = document.createDocumentFragment();

arrayPaisesA.forEach(paiss => {
    const newNode = document.createElement("li");
    newNode.textContent = paiss;

    const referenceNode = fragment.firstChild;


    fragment.insertBefore(newNode, referenceNode);
})
lista.appendChild(fragment);