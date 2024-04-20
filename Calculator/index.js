const number1 = Number(prompt("Introduzca el primer número"));
const number2 = Number(prompt("Intoduzca el segundo número"));

const suma = number1 + number2;

const mensajeSuma = "El resultado de la suma es " + suma;

alert(mensajeSuma);

const promedio = suma / 2;

const triple = promedio * 3;

const resultadoMenosDiez = triple - 10;

const mensajeFinal =  "El resultado final de las operaciones es " + resultadoMenosDiez;

alert(mensajeFinal);

const cantidad = Number(prompt("Cuántos números desea sumar"));

let sumatoria = 0;

for (let index = 1; index <= cantidad; index++) {
  const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
  sumatoria = sumatoria + numeroAsumar;
}

console.log(sumatoria);
