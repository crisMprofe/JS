const frutas = []
const fruta = prompt(`Bienvenido 🛒🍓🍒🍑🍉🍐.... Qué fruta que desea comprar:?`)
frutas.push(fruta)

while (confirm("Quieres seguir comprando? 🛒🍓🍒🍑🍉🍐")) {
    const fruta = prompt(`🛒🍓🍒🍑🍉🍐.... Qué fruta que desea comprar:?,  `)
    frutas.push(fruta)
    
  }
console.log("*************")
document.write(`Su compra: `)
for (let i=0;i < frutas.length; i++) {
   
    document.write(`<br/> \n ${frutas[i]} \n <br/> `)
 }
 document.write(`\n Muchas gracias por su compra 
 🍓🍒🍑 <br/> `) 
console.log("*************")

document.write("<br/> \n Hasta la próxima....")
console.log("Usted compró: ")
for (let fruta of frutas){
    console.log(fruta);
}
console.log(`Muchas gracias por su compra 🍓🍒🍑`)

//ForEach
console.log("ForEach")
frutas.forEach(fruta => document.write(fruta));//parámetro fruta funcion => retorna lo que está después

console.log('Usted compró: ')
frutas.forEach((fruta, index, array) => {
    console.log(`${index + 1}: ${fruta}`);
    console.log(array)
})