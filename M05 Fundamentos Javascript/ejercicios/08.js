function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  //Number.isInteger(numero);
  if (Number.isInteger(numero)) {
    return true;
  } else return false;
}
console.log(esNumeroEntero(59.99));

module.exports = esNumeroEntero;
