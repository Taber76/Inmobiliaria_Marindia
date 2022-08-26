// ========================== FUNCIONES ======================= //

// Capturo los criterios de filtrado
function buscarPropiedades(tipo) {
 
  //tomo las claves de busqueda del HTML
  let tipoOperacion = document.getElementById("tipoOperacion").value.toLowerCase()
  let tipoPropiedad = document.getElementById("tipoPropiedad").value.toLowerCase()
  let ubicacion = document.getElementById("ubicacion").value.toLowerCase()

  if (tipo === 'lista'){ // genero un listado en el DOM
    listarPropiedadesHTML(tipoOperacion, tipoPropiedad, ubicacion)
    return

  }else{ // devuelvo un array filtrado
    return propiedades
    .filter(prop => tipoOperacion == prop.tipoOperacion.toLowerCase() || tipoOperacion === "todas")
    .filter(prop => tipoPropiedad == prop.tipoPropiedad.toLowerCase() || tipoPropiedad == "tipo de propiedad")
    .filter(prop => ubicacion == prop.ubicacion.toLowerCase() || ubicacion == "ubicacion")
  }

}


// Genero listado en HTML
function listarPropiedadesHTML(tipoOperacion, tipoPropiedad, ubicacion){

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

  return
}


// Cargo mapa con propiedades
function buscarPropiedadesMapa(){

  // Genero el div para el mapa en el DOM
  document.getElementById("resultados").innerHTML = '<div id="map" class="col-12 py-2 mapaBusqueda"></div>'
  initMap(14)

  // defino variables para el mapa
  let mapMarcador, infoWindow, contenido

  
  // cargo marcas e info en el mapa
  buscarPropiedades("mapa").forEach( (propiedad) => {

    // marcas
    mapMarcador = new google.maps.Marker({
      position: new google.maps.LatLng(propiedad.latitud, propiedad.longitud),
       map: map,
     })

     // info
     infoWindow = new google.maps.InfoWindow()
     contenido = contenidoHTMLInfoWindow(propiedad)
     google.maps.event.addListener(mapMarcador, 'mouseover', function(contenido){
      return function(){
        infoWindow.setContent(contenido)
        infoWindow.open(map, this)
      }
     }(contenido))
      
  })

  return
}



// ============================ SCRIPT ========================= //

//cargo array de propiedades
let propiedades = cargaPropiedades()

listarPropiedadesHTML("venta", "tipo de propiedad", "ubicacion")

const btnBuscar = document.getElementById("btnBuscar")
const btnMapa = document.getElementById("btnMapa")


btnBuscar.addEventListener('click', (e) => {
  e.preventDefault()
  buscarPropiedades("lista")
})

btnMapa.addEventListener('click', (e) => {
  e.preventDefault()
  buscarPropiedadesMapa()
})