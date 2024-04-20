class Calculadora {
  suma(a, b) {
    return a + b;
  }
  resta(a, b) {
    return a - b;
  }
  multiplicacion(a, b) {
    return a * b;
  }
  division(a, b) {
    if (b == 0) {
      return alert("Indefinido");
    }
    const cociente = Math.floor(a / b);
    const residuo = a % b;
    if (!residuo == 0) {
      const respDivision = `${cociente} . Y el residuo es: ${residuo}`;
      return respDivision;
    }
    return cociente;
  }
  raizCuadrada(a) {
    return Math.sqrt(a);
  }

  raizCúbica(a) {
    return Math.cbrt(a);
  }
  potencia(a, b) {
    return Math.pow(a, b);
  }
}

function startCalculadora() {
  const calculator = new Calculadora();
  while (true) {
    const pregunta = prompt(
      "¿Qué operación  desea realizar: suma, resta, multiplicación, division, radicación cuadrática, radicación cúbica, potenciacion"
    );
    if (pregunta === "suma") {
      const numb1 = Number(prompt("Introduza el primer sumando"));
      const numb2 = Number(prompt("Introdzca el segundo sumando"));
      const operation = calculator.suma(numb1, numb2);
      alert(`La suma entre ${numb1} y ${numb2} es: ${operation} .`);
    } else if (pregunta === "resta") {
      const numb1 = Number(prompt("Introduza el minuendo"));
      const numb2 = Number(prompt("Introdzca el sustranedp"));
      const operation = calculator.resta(numb1, numb2);
      alert(`La diferencia entre ${numb1} y ${numb2} es: ${operation} .`);
    } else if (pregunta === "multiplicación") {
      const numb1 = Number(prompt("Introduza el multiplicando"));
      const numb2 = Number(prompt("Introdzca el multiplicador"));
      const operation = calculator.multiplicacion(numb1, numb2);
      alert(`El producto de ${numb1} y ${numb2} es: ${operation} .`);
    } else if (pregunta === "division") {
      const numb1 = Number(prompt("Introduza el dividendo"));
      const numb2 = Number(prompt("Introdzca el divisor"));
      const operation = calculator.division(numb1, numb2);
      alert(
        `El cociente de la division entre ${numb1} y ${numb2} es: ${operation} .`
      );
    } else if (pregunta === "radicación cuadrática") {
      const numb1 = Number(prompt("Introduza el radicando"));
      const operation = calculator.raizCuadrada(numb1);
      alert(`La raíz de ${numb1} es: ${operation} .`);
    } else if (pregunta === "radicación cúbica") {
      const numb1 = Number(prompt("Introduza el radicando"));
      const operation = calculator.raizCúbica(numb1);
      alert(`La raíz de ${numb1} es: ${operation} .`);
    } else if (pregunta === "potenciación") {
      const numb1 = Number(prompt("Introduza la base"));
      const numb2 = Number(prompt("Introdzca el exponente"));
      const operation = calculator.potencia(numb1, numb2);
      alert(
        `La ptencia de base ${numb1} y exponente ${numb2} es: ${operation} .`
      );
    } else if (pregunta === "salir") {
      break;
    } else {
      alert("Opción no válida. Por favor, elija una operación válida.");
    }
  }
}

startCalculadora();
