function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Verificar si el array está vacío
  if (array.length === 0) {
    // console.log("El array está vacío.");
    return 0;
  }

  // Inicializar variables para almacenar el valor máximo y su índice
  let valorMaximo = array[0];
  let indiceMaximo = 0;

  // Iterar sobre el array para encontrar el valor máximo y su índice
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
      indiceMaximo = i;
    }
  }

  // Retornar el índice del valor máximo
  return indiceMaximo;
}
let array = [42];
console.log(encontrarIndiceMayor(array));
module.exports = encontrarIndiceMayor;
