console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"

let nombreUsuario = "Taty";
console.log("\nBienvenido: \n" + nombreUsuario + "\n");
console.log(`
Bienvenido: 
${nombreUsuario}
`);
console.log(`Hola, te esperamos
${nombreUsuario}
 hasta la próxima`)
 //Métodos:
 console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`)//salida en mayúsculas

 //operador ternario
 //${(condicion)? true : false}
 let estado = true

console.log(`
${estado ? 'inline!' : 'offline!'} ${nombreUsuario}
`);
