
// Esta funcion se llama cuando presiono "Buscar" desde el HTML
function buscarPropiedades() {
 
  //tomo las claves de busqueda del HTML
  let tipoOperacion = document.getElementById("tipoOperacion").value.toLowerCase()
  let tipoPropiedad = document.getElementById("tipoPropiedad").value.toLowerCase()
  let ubicacion = document.getElementById("ubicacion").value.toLowerCase()

  listarPropiedades(tipoOperacion, tipoPropiedad, ubicacion)
}

// Genero listado en HTML
function listarPropiedades(tipoOperacion, tipoPropiedad, ubicacion){

  //selecciono elemento HTML dentro del cual se mostraran los resultados de la busqueda
  const htmlfiltropropiedades = document.getElementById("resultados")

  let fragment = ""
  
  //recorro el array
  propiedades.forEach((prop) => {

    if((tipoOperacion == prop.tipoOperacion.toLowerCase() || tipoOperacion == "todas") & 
      (tipoPropiedad == prop.tipoPropiedad.toLowerCase() || tipoPropiedad == "tipo de propiedad") &
      (ubicacion == prop.ubicacion.toLowerCase() || ubicacion == "ubicacion")){
        
      //agrego propiedad al fragment  
      //fragment += templateVentaCasa(prop)
      fragment += templateSegunPropiedad(prop)
      }
  })

 
  fragment == "" && (fragment += templateNotFound()) // no hubieron coincidencias de busqueda 

  //agrego fragment al HTML
  htmlfiltropropiedades.innerHTML = fragment
}


// ============================ EJECUCION ========================= //

//cargo array de propiedades
let propiedades = cargaPropiedades()

listarPropiedades ("venta", "tipo de propiedad", "ubicacion")

