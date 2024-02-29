function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var cuenta  = 0
  array.forEach((elemento, index) => {
    if(elemento >= 11){
      cuenta += 1
    }
  });

  return(cuenta)
  

}

module.exports = contarElementosMayoresA10;
