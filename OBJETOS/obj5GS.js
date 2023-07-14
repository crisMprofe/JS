console.log("Getters Setters Objects")
const nombre="Taty"
const gato = {
    nombre: "Phortos",
    nombreG: "Urano",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    get nombreMayuscula(){
        return this.nombre.toUpperCase();//manipulando el nombre dentro del objeto
       },
    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo)
    },
};
console.log(gato.nombreMayuscula);
gato.agregarEnemigo = "ratas";
console.log(gato.enemigos);