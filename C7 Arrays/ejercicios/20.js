function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var NR  = array[0]
  return(array.every((element) => element == NR))
}

module.exports = todosIguales;
