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

// Creacion array de propiedades
function crearArray(){

  const array = []
  array.push(new Propiedad( 1, "./images/propiedades/casa1.png", "alquiler", "casa", "Marindia", 25000, 150, 3, true, true))
  array.push(new Propiedad( 2, "./images/propiedades/casa2.png", "alquiler", "casa", "Salinas", 20000, 100, 2, true, false))
  array.push(new Propiedad( 3, "./images/propiedades/casa3.png", "alquiler", "casa", "Salinas", 15000, 70, 2, true, true))
  array.push(new Propiedad( 4, "./images/propiedades/apartamento1.png", "alquiler", "apartamento", "Marindia", 12000, 60, 2, false, false))
  array.push(new Propiedad( 5, "./images/propiedades/apartamento2.png", "alquiler", "apartamento", "Pinamar", 14000, 70, 2, false, false))
  array.push(new Propiedad( 6, "./images/propiedades/apartamento3.png", "alquiler", "apartamento", "Salinas", 10000, 50, 1,true, false))
  array.push(new Propiedad( 7, "./images/propiedades/apartamento4.png", "venta", "apartamento", "Pinamar", 85500, 62, 2, false, false))
  array.push(new Propiedad( 8, "./images/propiedades/apartamento5.png", "venta", "apartamento", "Marindia", 52600, 40, 1, false, false))
  array.push(new Propiedad( 9, "./images/propiedades/casa4.png", "venta", "casa", "Salinas", 120000, 120, 3, true, false))
  array.push(new Propiedad( 10, "./images/propiedades/casa5.png", "venta", "casa", "Pinamar", 100000, 100, 2, false, false))
  array.push(new Propiedad( 11, "./images/propiedades/casa7.png", "venta", "casa", "Salinas", 180000, 70, 2, true, true))
  array.push(new Propiedad( 12, "./images/propiedades/casa6.png", "venta", "casa", "Marindia", 120000, 180, 4, true, false))
  array.push(new Propiedad( 13, "./images/propiedades/terreno1.png", "venta", "terreno", "Marindia", 50000, 720, 0, false, false))
  array.push(new Propiedad( 14, "./images/propiedades/terreno2.png", "venta", "terreno", "Salinas", 70000, 1000, 0, false, false))
  array.push(new Propiedad( 15, "./images/propiedades/terreno3.png", "venta", "terreno", "Pinamar", 60000, 800, 0, false, false))


  return array
}
 

// Devuelve lista de propiedades segun criterio
function listaPropiedades(tipoOperacion, tipoPropiedad, ubicacion){

  return propiedades
  .filter(prop => tipoOperacion == prop.tipoOperacion.toLowerCase() || tipoOperacion === "todas")
  .filter(prop => tipoPropiedad == prop.tipoPropiedad.toLowerCase() || tipoPropiedad == "tipo de propiedad")
  .filter(prop => ubicacion == prop.ubicacion.toLowerCase() || ubicacion == "ubicacion")
}


// Genero listado en HTML
function propDestacadas(tipoOperacion, tipoPropiedad){

  let fragment = ""
  const htmldestacadas = document.getElementById("destacadas")
  lista = listaPropiedades(tipoOperacion, tipoPropiedad, "ubicacion")
  
  lista.forEach((prop) => {
    fragment += templateDestacadas(prop)
  })
  
  htmldestacadas.innerHTML = fragment
}


// Borro las clases del menu de elementos destacados
function borrarActives(){
  casas.parentNode.className = "" 
  apartamentos.parentNode.className = "" 
  alquileres.parentNode.className = "" 
  terrenos.parentNode.className = "" 
  locales.parentNode.className = "" 
  chacras.parentNode.className = "" 
}


// pongo active la seleccion y muestro las propiedades
function alPresionar(opcion, tipoOperacion, tipoPropiedad){
  borrarActives()
  opcion.parentNode.className = "active"
  propDestacadas(tipoOperacion, tipoPropiedad)
}




// =============== TEMPLATES ================= //


function templateDestacadas(prop){

  let moneda = "USD"
  if(prop.tipoOperacion.toLowerCase() == "alquiler"){
    moneda = "UYU"
  }
  
  let card = 
  `<div class="col-lg-4 col-md-6 shuffle-item">
    <div class="project-img-container">
      <a class="gallery-popup" href="${prop.foto}" aria-label="project-img">
        <img class="img-fluid" src="${prop.foto}" alt="project-img">
        <span class="gallery-icon"><i class="fa fa-plus"></i></span>
      </a>
      <div class="project-item-info">
        <div class="project-item-info-content">
          <h3 class="project-item-title">
            <a href="">${prop.tipoOperacion.toUpperCase()} - ${moneda} ${prop.valor}</a>
          </h3>
          <p class="project-cat">${prop.ubicacion} - ${prop.superficie}m<sup>2</sup></p>
        </div>
      </div>
    </div>
</div>`

return card
}




// ============================ SCRIPT ========================= //

//creo array de propiedades
const propiedades = crearArray()

// declaro las constantes relacionadas al HTML
const casas = document.getElementById("casas")
const apartamentos = document.getElementById("apartamentos")
const alquileres = document.getElementById("alquileres")
const terrenos = document.getElementById("terrenos")
const locales = document.getElementById("locales")
const chacras = document.getElementById("chacras")

// muestro las casas destacadas
alPresionar(casas, "todas", "casa")

// listado de eventos posibles
casas.addEventListener('click',() => {
  alPresionar(casas, "todas", "casa")
})

apartamentos.addEventListener('click',() => {
  alPresionar(apartamentos, "todas", "apartamento")
})

alquileres.addEventListener('click',() => {
  alPresionar(alquileres, "alquiler", "tipo de propiedad")
})

terrenos.addEventListener('click',() => {
  alPresionar(terrenos, "todas", "terreno")
})

locales.addEventListener('click',() => {
  alPresionar(locales, "todas", "local")
})

chacras.addEventListener('click',() => {
  alPresionar(chacras, "todas", "chacra")
})




