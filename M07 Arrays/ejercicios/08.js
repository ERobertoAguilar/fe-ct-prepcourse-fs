function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // Utilizar el método filter para obtener solo los números pares del array
  return array.filter(function (elemento) {
    // Verificar si el elemento es un número par
    return typeof elemento === "number" && elemento % 2 === 0;
  });
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarNumerosPares(array));
module.exports = filtrarNumerosPares;
