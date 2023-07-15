const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('templateFooter');
const fragment = document.createDocumentFragment();


document.addEventListener('click', (e) =>{
   // console.log(e.target.matches(".card .btn-outline-primary"));

    if(e.target.matches(".card .btn-outline-primary")){
        console.log('ejecutar agregar al carro');
        agregarAlCarrito(e);
    }
    //console.log(e.target.matches(".list-group-item .btn-success"));
    if(e.target.matches("#carrito .list-group-item .btn-success")){
        btnAumentar(e);
    };
    //console.log(e.target.matches(".list-group-item .btn-danger"));
    if(e.target.matches("#carrito .list-group-item .btn-danger")){
        btnDisminuir(e);
    };

})
let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    //console.log(e.target.dataset.fruta);
 //recordar construimos nuestro producto:   
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1,
        precio:parseInt(e.target.dataset.precio)
    };
    //console.log(producto);
    const indice = carritoObjeto.findIndex((item)=> item.id === producto.id);
//finIndex buscamos si existe el prod.
    console.log("ex",indice);

    if (indice === -1){
        carritoObjeto.push(producto);
    } else {
    // en caso contrario aumentamos su cantidad
    carritoObjeto[indice].cantidad++;
    //carritoObjeto[indice].precio=  carritoObjeto[indice].cantidad * producto.precio; //calculo el precio de forma dinámica x eso aquí en el array no lo calculo
    };

    console.log(carritoObjeto);//verifico por consola
    seleccionCarrito();
};

const seleccionCarrito = () => {

    carrito.textContent = "";
    //ahora voy a recorrer el array
    carritoObjeto.forEach((item) =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad
//agrego de forma dinamica dataset para capturar boton quitar o agregar
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;

        fragment.appendChild(clone)//evito reflo
    });
    carrito.appendChild(fragment);
    seleccionFooter();
};
//firstElementChild no me sirve en este caso ya q hay dos li

const seleccionFooter = () =>{
    console.log("seleccion footer");
    footer.textContent="";

    const total = carritoObjeto.reduce((acc, current) => acc + current.cantidad * current.precio, 0
    );
    console.log(total)
    //clonamos:
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('p span').textContent = total;
//no necesito un fragment xq es un solo bloque "no un conj de elementos"
    footer.appendChild(clone);

};
const btnAumentar = (e) => {
    console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++ //aumento la cantidad
        }
        return item;
    });
    seleccionCarrito();
}
const btnDisminuir = (e) => {
    // console.log("me diste click",e.target.dataset.id);
    carritoObjeto = carritoObjeto.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
               
                if (item.cantidad === 0) return;
                return item;
            }
        } else {
            return item;//retorne los otros items
        }
    });
    seleccionCarrito();
};
//pregunto si cantidad > 0 para q no de neg