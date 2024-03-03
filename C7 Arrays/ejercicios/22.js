function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:


  // var array = []


  // for (let index = 0; index <= 60; index++) {
  //   var cuenta = 6 * index
  //   array.push(cuenta)
    
  // }

  // console.log(array)

  // return(array)

  const tabla = [];
  for (let i = 0; i <= 10; i++) {
      const resultado = 6 * i;
      tabla.push(resultado);
  }
  return tabla;
}


module.exports = tablaDelSeis;
