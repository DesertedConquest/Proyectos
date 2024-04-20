const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;

const mensajeCantidad = "La cantidad de carácteres de la frase es: " + cantidad;

console.log(mensajeCantidad);

const fraseMinúscula = mensajeCantidad.toLowerCase();
const fraseMayúscula = mensajeCantidad.toUpperCase();

const minMay = fraseMinúscula + fraseMayúscula;

console.log(minMay);
