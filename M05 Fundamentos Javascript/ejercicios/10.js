function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (fecha instanceof Date && !isNaN(fecha.getTime())) {
    return true;
  } else {
    return false;
  }
}
console.log(esFechaValida("03/02/2024"));

module.exports = esFechaValida;
