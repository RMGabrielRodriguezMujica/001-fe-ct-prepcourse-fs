function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:


  if (arguments.length == 0) {
    return(0)
  } else if (arguments.length == 1) {
    return (arguments[0])
  } else {
    let producto = 1
    for (let index = 0; index < arguments.length; index++) {
      producto *= arguments[index]
    }
    return producto
  }

  console.log("este es " + producto)


}

module.exports = multiplicarArgumentos;
