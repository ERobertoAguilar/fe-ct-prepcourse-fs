function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;

  do {
    // Aumentar el valor de "num" en 5 en cada iteración
    num += 5;

    // Incrementar el contador
    contador++;
  } while (contador < 8);

  // Retornar el valor final de "num"
  return num;
}
console.log(doWhile(5));
console.log(doWhile(100));
console.log(doWhile(-1));
module.exports = doWhile;
