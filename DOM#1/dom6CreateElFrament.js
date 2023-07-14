const liste = document.querySelector('#liste')//1

const arrayPaises = ["Argentina","Perú", "Bolivia", "Colombia"]//4

const fragment = document.createDocumentFragment();
{/*dejo comentario a modo recordatorio de {}*/}
/*para evitar el reflow con innerHTML agregro variable let template inicializada en nada y al final appendChild para agregar el elemento*/
 let template='';
arrayPaises.forEach((pais) => {
    /*liste.innerHTML*/
    template += `
    <li class="list">
        <b>País:</b>
        <span class="text-primary">${pais}</span>
    </li>
    `;
}); 
liste.innerHTML = template;
//no funciona entonces hago innerHTML y en el método cambio al template//  
     
/*
arrayPaises.forEach(pais => {
    const li = document.createElement("li");
    li.className = "list";

    const b = document.createElement("b");
    b.textContent = "País:";

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
});

lista.appendChild(fragment);
*/
