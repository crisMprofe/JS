console.log("Destructuring Objects")
const nombre="Taty"
const gato = {
    //nombre: "Phortos",
    nombreG: "Urano",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo",
            },
        },
    },
    comer(alimento){
        return `${this.nombreG} está comiendo ${alimento}`;
    },
    listarEnemigos(){
        this.enemigos.forEach((item) => console.log(item));
    },
};
const nombreGato=gato.nombre;
console.log(nombreGato);

//const {nombre,duerme,edad} = gato;//nombre da error porque ya está declarada o cambio el nombre de la variable o agrego alias:

/*const {nombre: nombreG, duerme,edad} = gato;//desestructurando el objeto
console.log(nombreG, duerme, edad);*/

const {nombre: nombreG ="sin nombre", duerme,edad} = gato;//si la propiedad no está declarada entonces le puedo asignar por defecto con =, tanto con alias como sin alias

console.log(nombreG, duerme, edad);
//acceder a otros amigos sin desestrucración
const amigosGatos = gato.otros.amigos;
console.log(amigosGatos);

//acceder a otros amigos desestructurando forma ideal

const {amigos: amigosGatos1} = gato.otros;
console.log(amigosGatos1);
const {favoritos: favoritosG} = gato.otros;
console.log(favoritosG);


//acceder a otros  desestructurando amigos
const {otros: {amigos} } = gato;
console.log(amigos);//puedo agregar alias a amigos
const {otros: {favoritos} } = gato;
console.log(favoritos);

//accedo amigos con alias desestructuro array
const {amigos:amigosArray}=gato.otros;
console.log(amigosArray);
const[amigo1,amigo2,amigo3,amigo4="no existe"]=amigosArray;
console.log(amigo1,amigo2,amigo3,amigo4);

const {comer} = gato;
console.log(comer("Salmón"))