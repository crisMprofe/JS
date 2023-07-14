console.log("vinculado 😍. OBJETO LITERAL métodos")
const nombre="Cristina"
const gato = {
    nombre:"valiente",
    duerme: true,
    edad:10,
    enemigos:["agua","perros"],
    comer: function(){//indico un método
        console.log('gato comiendo')
    },
    comerDos() {
        console.log("gato comiendo dos");
    },
    //vieja forma
    comerR(alimento){
        console.log("gato comiendo: " + alimento)
        console.log(`
            ${nombre} está comiendo ${alimento}
            ${gato.nombre} está comiendo ${alimento}
        `)
        console.log(this);
    },
    comer1(alimento){
        console.log(`${this.nombre} está comiendo ${alimento}`)
    },
    comerA(alimento){
        return `${this.nombre} está comiendo ${alimento}`
    },
    listarEnemigos(){
        this.enemigos.forEach((item) => console.log(item));
    },
};
/*1 de esta forma dentro del array da error: ${nombre} está comiendo ${alimento} ya que es una variable global que no está definida si la declaro fuera del array dará correctamente, pero no es lo que queremos queremo que me dé el nombre del gato; function arrow no funciona con this ni super*/
gato.comer();
gato.comerDos();
gato.comerR("pez")
gato.comer1("Atún")
console.log(gato.comerA("pez"));
gato.listarEnemigos();
//function flecha dentro del método si se puede usar