console.log("************************")
console.log("ARRAY")

//const miArray = []
//miArray = ["nuevoElemento"] 
//console.log(miArray) --da error
const miArray = []
miArray[0] = ["nuevoElemento"]
console.log(miArray)


const frutas =[];
//const frutas =["sandía","pera","banana","naranja"]
//const en un array puede ser mutable
//puedo con const asignar en un índice un valor
frutas[0]="sandia";
frutas[1]="mandarina";
console.log(frutas)
//Recordar no puedo crear dos array con el mismo nombre con const, con let si.

let frutasF =[];
frutasF =["sandía","pera","banana","naranja"]
console.log(frutasF)

console.log("push() agrego elementos al final array")

frutas.push("manzana")
frutas.push("limón")
frutas.push("pomelo")
console.log(frutas)

console.log("unshift() agrego elementos al principio array")
frutas.unshift("frutilla")
console.log(frutas)

console.log("pop() elimino el último elemento array")
frutas.pop()
console.log(frutas)

frutaEliminada=frutas.pop()
console.log(frutas)
console.log(frutaEliminada)

console.log("shift pop() elimino el primer elemento array")
frutas.shift()
console.log(frutas)

frutaEliminada=frutas.shift()
console.log(frutas)
console.log(frutaEliminada)