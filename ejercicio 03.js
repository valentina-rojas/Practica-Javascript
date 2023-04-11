//Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.

let palabra = "Hola";
let limpiarPalabra = palabra.replace(" ", "");
let cantidadLetras = limpiarPalabra.length;      

// La palabra "Hola" tienen 4 letras

console.log("la cantidad de letras de " + palabra + " es " + cantidadLetras);