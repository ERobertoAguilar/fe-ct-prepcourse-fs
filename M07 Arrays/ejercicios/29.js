function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  // Buscar el número faltante en la secuencia
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] !== numeros[i - 1] + 1) {
      return numeros[i - 1] + 1;
    }
  }
  // Si no se encuentra ningún número faltante
  return null;
}
let numeros = [];
console.log(encontrarNumeroFaltante(numeros));
module.exports = encontrarNumeroFaltante;
