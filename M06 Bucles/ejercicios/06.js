function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  // Convertir el número a cadena y obtener su longitud
  let longitud = Math.abs(num).toString().length;

  // Verificar si la longitud es igual a 3
  return longitud === 3;
}
console.log(tieneTresDigitos(1500));
module.exports = tieneTresDigitos;
