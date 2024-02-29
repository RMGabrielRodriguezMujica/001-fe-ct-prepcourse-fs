function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var cuenta  = 0
  arrayOfNums.forEach((elemento) => {
    cuenta += elemento
  });

  return(cuenta)
}

module.exports = agregarNumeros;
