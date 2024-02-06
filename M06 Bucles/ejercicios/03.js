function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:4
  if (x === y) {
    return x || y;
  }
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(obtenerMayor(65, 15));
console.log(obtenerMayor(23, 111));
console.log(obtenerMayor(10, 10));
module.exports = obtenerMayor;
