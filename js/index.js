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




// ============================ SCRIPT ========================= //

let propiedades = cargaPropiedades()

// declaro las constantes relacionadas al HTML
const casas = document.getElementById("casas")
const apartamentos = document.getElementById("apartamentos")
const alquileres = document.getElementById("alquileres")
const terrenos = document.getElementById("terrenos")
const locales = document.getElementById("locales")
const chacras = document.getElementById("chacras")

// muestro las casas destacadas
alPresionar(casas, "todas", "casa")


// eventos posibles
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



