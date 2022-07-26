// ======================== CLASES ======================== //
class Propiedad{
  constructor(id, foto, tipoOperacion, tipoPropiedad, ubicacion, valor, superficie, dormitorios, garage, piscina){
    this.id = id
    this.foto = foto
    this.tipoOperacion = tipoOperacion
    this.tipoPropiedad = tipoPropiedad
    this.ubicacion = ubicacion
    this.valor = valor
    this.superficie = superficie
    this.dormitorios = dormitorios
    this.garage = garage
    this.piscina = piscina 
  }
}


// =========================== FUNCIONES ======================== //

// Array de propiedades
function crearArray(){

  const array = []
  array.push(new Propiedad( 1, "../images/propiedades/casa1.png", "alquiler", "casa", "Marindia", 25000, 150, 3, true, true))
  array.push(new Propiedad( 2, "../images/propiedades/casa2.png", "alquiler", "casa", "Salinas", 20000, 100, 2, true, false))
  array.push(new Propiedad( 3, "../images/propiedades/casa3.png", "alquiler", "casa", "Salinas", 15000, 70, 2, true, false))
  array.push(new Propiedad( 4, "../images/propiedades/apartamento1.png", "alquiler", "apartamento", "Marindia", 12000, 60, 2, false, false))
  array.push(new Propiedad( 5, "../images/propiedades/apartamento2.png", "alquiler", "apartamento", "Pinamar", 14000, 70, 2, false, false))
  array.push(new Propiedad( 6, "../images/propiedades/apartamento3.png", "alquiler", "apartamento", "Salinas", 10000, 50, 1,false, false))
  array.push(new Propiedad( 7, "../images/propiedades/apartamento4.png", "venta", "apartamento", "Pinamar", 85500, 62, 2, false, false))
  array.push(new Propiedad( 8, "../images/propiedades/apartamento5.png", "venta", "apartamento", "Marindia", 52600, 40, 1, false, false))
  array.push(new Propiedad( 9, "../images/propiedades/casa4.png", "venta", "casa", "Salinas", 120000, 120, 3, true, true))
  array.push(new Propiedad( 10, "../images/propiedades/casa5.png", "venta", "casa", "Pinamar", 100000, 100, 2, false, false))
  array.push(new Propiedad( 11, "../images/propiedades/casa7.png", "venta", "casa", "Salinas", 80000, 70, 2, true, false))
  array.push(new Propiedad( 12, "../images/propiedades/casa6.png", "venta", "casa", "Marindia", 160000, 180, 4, true, false))
  array.push(new Propiedad( 13, "../images/propiedades/terreno1.png", "venta", "terreno", "Marindia", 50000, 720, 0, false, false))
  array.push(new Propiedad( 14, "../images/propiedades/terreno2.png", "venta", "terreno", "Salinas", 70000, 1000, 0, false, false))
  array.push(new Propiedad( 15, "../images/propiedades/terreno3.png", "venta", "terreno", "Pinamar", 60000, 800, 0, false, false))

  return array
}
 

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
  for (const prop of propiedades){

    if((tipoOperacion == prop.tipoOperacion.toLowerCase() || tipoOperacion == "todas") & 
      (tipoPropiedad == prop.tipoPropiedad.toLowerCase() || tipoPropiedad == "tipo de propiedad") &
      (ubicacion == prop.ubicacion.toLowerCase() || ubicacion == "ubicacion")){
      
      //agrego propiedad al fragment  
      fragment += templateVentaCasa(prop)
    }
  }

  if(fragment == ""){
    fragment += templateNotFound()
  }

  //agrego fragment al HTML
  htmlfiltropropiedades.innerHTML = fragment
}




// =============== TEMPLATES ================= //

// Venta de casa
function templateVentaCasa(prop){
  let card =
  `<div class="col-md-4 gap-3" style="padding: 20px;" id="template">
    <div class="card">
      <img src="${prop.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">USD ${prop.valor} - ${prop.ubicacion} </h5>
        <p class="card-text">Esta ${prop.tipoPropiedad} de ${prop.superficie}m2 se encuentra para la ${prop.tipoOperacion}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${prop.dormitorios} dormitorios</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
    </div>
  </div>`
  return card
}





// No hay propiedades que coincidan con el criterio de busqueda
function templateNotFound(){
  let card =
  `<div class="row justify-item-center">
      <div class="col-12">
        <h3 class="mt-5 mb-5">No se encontraron propiedades</h3>
      </div>
    </div>`
  return card
}

// ============================ SCRIPT ========================= //

//creo array de propiedades
const propiedades = crearArray()

listarPropiedades ("todas", "tipo de propiedad", "ubicacion")

