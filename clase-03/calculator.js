//Arrow Function lleva el return implicito

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;

// Función Tradicional Dividir con Callback
function dividir(n1, n2, callback) {
  if (n2 !== 0) {
    return callback(null, n1 / n2);
  } else {
    return callback("N2 ES CERO");
  }
}

/* Funcion con Promesa */
function dividir(n1, n2) {
  return new Promise((exito, fracaso) => {
    if (n2 !== 0) {
      return exito(n1 / n2);
    } else {
      return fracaso("N2 es Cero");
    }
  });
}

// Funcion Callback con verificación
function calcular(n1, n2, operacionARealizar) {
  const resultadoDeLaOperacion = operacionARealizar(n1, n2);
  return resultadoDeLaOperacion;
}

function verificarDivision(error, exito) {
  if (error) {
    console.log("Ocurrio un error");
    console.log("El error es: " + error);
    return error;
  } else {
    return exito;
  }
}

const resultado1 = calcular(10, 20, sumar);
console.log(resultado1);

const resultado2 = calcular(10, 20, restar);
console.log(resultado2);

const resultado3 = calcular(10, 20, multiplicar);
console.log(resultado3);

const resultado4 = calcular(10, 0, dividir);
console.log(resultado4);
