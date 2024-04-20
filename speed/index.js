const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
  console.log("La velocidad del móvil es " + velocidad);
  return velocidad;
};

const velocidad1 = calcularVelocidad(10,2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad (850, 5)
console.log("La velocidad de pedro es " + velocidad2);

const velocidad3 = calcularVelocidad (487, 21)
console.log("La velocidad de pedro es " + velocidad3);

