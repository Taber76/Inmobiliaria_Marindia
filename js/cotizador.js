function primerDesafio() {

  let metrosCuadrados = document.getElementById("metraje").value	
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
      document.getElementById("metraje").value = metrosCuadrados
      document.getElementById("valor").innerHTML = "El costo de una vivienda de " + metrosCuadrados + "m2 es de USD " + Math.round(metrosCuadrados * 853) 
    }
  }   

}

