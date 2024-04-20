const comprar = () => {
  let totalApagar = 0;
  for (let i = 1; (i = 1); i++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const unidades = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuanto cuesta cada unidad?"));
    const subTotal = unidades * precio;
    totalApagar = totalApagar + subTotal;
  }

  console.log(totalApagar);
  return totalApagar;
};

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();

const total = total1 + total2 + total3;

console.log("El monto faccturando en 3 días es " + total);

e;
