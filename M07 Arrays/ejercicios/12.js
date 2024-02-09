function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;
}
let arrayOfNums = [10, 10, 16];
console.log(agregarNumeros(arrayOfNums));
module.exports = agregarNumeros;
