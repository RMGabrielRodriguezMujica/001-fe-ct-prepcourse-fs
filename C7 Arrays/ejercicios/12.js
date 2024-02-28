function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  array.forEach((elemento, index) => {
    array[index] = elemento.toUpperCase()
  });

  return(array)
}

module.exports = convertirStringAMayusculas;
