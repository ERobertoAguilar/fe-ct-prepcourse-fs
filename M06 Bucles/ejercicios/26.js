function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Eliminar espacios y convertir a minúsculas para hacer la comparación sin considerar mayúsculas ni espacios
  const texto1 = str1.toLowerCase().replace(/\s/g, "");
  const texto2 = str2.toLowerCase().replace(/\s/g, "");
  // Convertir los strings a arrays, ordenarlos y luego convertirlos nuevamente a strings
  const textoOrdenado1 = texto1.split("").sort().join("");
  const textoOrdenado2 = texto2.split("").sort().join("");
  // Verificar si los textos ordenados son iguales
  return textoOrdenado1 === textoOrdenado2;
}

module.exports = esAnagrama;
