function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var cuenta  = 0
  resultadosTest.forEach((elemento) => {
    cuenta += elemento
  });

  cuenta /= resultadosTest.length

  return(cuenta)

  
}


module.exports = promedioResultadosTest;
