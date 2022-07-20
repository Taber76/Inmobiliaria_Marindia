// Calcula el costo de construir una vivienda de determinados metros cuadrados
const calculoCosto = (metraje, costoMetro) => Math.round(metraje * costoMetro)

// Devuelve un entero si el numero pasado es entero, sino devuelve un numero con dos decimales
function dosDecimales (numero) { 
  let resultado = 0
 
  if(isNaN(numero)){  
    //si le paso algo que no es un numero deveulve 0
    resultado = 0
  } else {
    //de lo contrario le devuelvo redondeado a 2 decimales como maximo
    resultado = Math.round(numero * 100) / 100
  }

  return resultado
}


// Esta funcion se llama cuando presiono "Calcular" desde el HTML
function primerDesafio() {

  let metrosCuadrados = document.getElementById("metraje").value
  let costoPorMetro = 850	
  let text

  while (text !== "valor válido"){ 
  //se repite hasta obtener un valor valido
    
    if (isNaN(metrosCuadrados) || metrosCuadrados < 40 || metrosCuadrados > 80) {        
      // si el valor ingresado no es un numero entre 40 y 80
      text = "Ingrese un valor válido!!"
      document.getElementById("valor").innerHTML = "debe ingresar un valor entre 40 y 80"
      alert("Ingrese un valor válido!!")
      metrosCuadrados = prompt("Valor entre 40 y 80")
      if(metrosCuadrados == null){
        break
      }  
    } else {
      // si el valor ingresado es un numero entre 40 y 80
      text = "valor válido"
      document.getElementById("metraje").value = dosDecimales(metrosCuadrados)
      document.getElementById("valor").innerHTML = "El costo de una vivienda de " + dosDecimales(metrosCuadrados) + "m2 es de USD " + calculoCosto (metrosCuadrados, costoPorMetro) 
    }
  }   

}

