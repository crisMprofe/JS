console.log("vinculado 😍. OBJETO LITERAL")

const gato = {
    nombre:"valiente",
    duerme: true,
    edad:10,
    enemigos:["agua","perros"],
    //agrego otro objeto
    otros:{
        amigos:["cobarde", "timido"],
        favoritos:{
            comida:{
                frio:"salmon",
                caliente:"pollo"
            }
        }
    }
};
console.log(gato) 
document.write(gato)
console.log(gato.nombre)
console.log(gato["nombre"])
console.log(gato.duerme)
console.log(gato["enemigos"])
console.log(gato["enemigos"][0])
console.log(gato.enemigos[1])

/*CRUD*/
console.log("****************")
console.log("CRUD: create")
gato.color ="azul";
console.log(gato)

console.log("CRUD: read")
console.log(gato)

console.log("CRUD: update")
gato.edad = 5
console.log(gato)

console.log("CRUD: delete")
delete gato.duerme
console.log(gato)

/* hasOwnProperty:consultar por la propiedad devuelve true o false*/
console.log("****************")
console.log(gato.hasOwnProperty("edad"))
/*podría preguntar si existe hacer una actualización*/
if (gato.hasOwnProperty("nombre")){
    gato.nombre = "flojera";
}
console.log(gato)
/* OBJETOS ANIDADOS agrego al objeto otros:*/
console.log("***muestro lo el objeto agregado al objeto***")
console.log(gato.otros.favoritos.comida)
console.log(gato.otros.amigos)
/*si me equivoco y pongo x ej. favorito en vez de favoritos da error feo, o si amigos coloco amigo da undefined)
console.log(gato.otros.favorito.comida)
console.log(gato.otros.amigo)

/*ANIDAMIENTO ..encadenamiento opcional soluciona el error anterior aunque da como undefined:
console.log(gato.otros.favorito?.comida)
console.log(gato.otros.amigos)*/



/*ARRAYS*/
//const amigos = ["cobarde","tímido"]
/*propiedades*/
//console.log(amigos.length)
/*métodos coloco paréntesis:
console.log(amigos.push())*/
