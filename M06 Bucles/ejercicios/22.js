function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let dias;
  do {
    if (isNaN(mes) || mes < 1 || mes > 12) {
      return 0;
    }
  } while (isNaN(mes) || mes < 1 || mes > 12);
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dias = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dias = 30;
      break;
    case 2:
      dias = 28;
      break;
    default:
      dias = 0;
  }
  return dias;
}
console.log(diasEnMes(1));
console.log(diasEnMes(2));
console.log(diasEnMes(3));
console.log(diasEnMes(4));
console.log(diasEnMes(5));
console.log(diasEnMes(6));
console.log(diasEnMes(7));
console.log(diasEnMes(8));
console.log(diasEnMes(9));
console.log(diasEnMes(10));
console.log(diasEnMes(11));
console.log(diasEnMes(12));

module.exports = diasEnMes;
