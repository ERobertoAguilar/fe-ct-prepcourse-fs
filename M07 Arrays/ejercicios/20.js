function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cantidadPares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue; // Saltar la iteración si el número es impar
    }

    cantidadPares++;
  }

  return cantidadPares;
}
let numeros = [1, 2, 3, 4, 5, 6];
console.log(contarParesConContinue(numeros));
module.exports = contarParesConContinue;
