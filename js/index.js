// Devuelve lista de propiedades segun criterio
function filtraPropiedades(tipoOperacion, tipoPropiedad, ubicacion){

  return propiedades
  .filter(prop => tipoOperacion == prop.tipoOperacion.toLowerCase() || tipoOperacion === "todas")
  .filter(prop => tipoPropiedad == prop.tipoPropiedad.toLowerCase() || tipoPropiedad == "tipo de propiedad")
  .filter(prop => ubicacion == prop.ubicacion.toLowerCase() || ubicacion == "ubicacion")
}


// Genero listado en HTML
function propDestacadas(tipoOperacion, tipoPropiedad){

  let fragment = ""
  const htmldestacadas = document.getElementById("destacadas")
  lista = filtraPropiedades(tipoOperacion, tipoPropiedad, "ubicacion")
  
  lista.forEach((prop) => {
    fragment += templateDestacadas(prop)
  })
  
  htmldestacadas.innerHTML = fragment

  return
}


// Borro las clases del menu de elementos destacados
function borrarActives(){
  casas.parentNode.className = "" 
  apartamentos.parentNode.className = "" 
  alquileres.parentNode.className = "" 
  terrenos.parentNode.className = "" 
  locales.parentNode.className = "" 
  chacras.parentNode.className = ""
  
  return
}


// Pongo active la seleccion y muestro las propiedades
function alPresionar(opcion, tipoOperacion, tipoPropiedad){
  borrarActives()
  opcion.parentNode.className = "active"
  propDestacadas(tipoOperacion, tipoPropiedad)

  return
}


// Propiedades destacadas
function propiedadesDestacadas(){
  
  propiedades = JSON.parse(localStorage.getItem("propiedades"))

  if(!propiedades){  //si no hay propiedades cargadas en el local storage

    Toastify({
      text: "Cargando recursos...",
      duration: 4800,
      gravity: "bottom",
      position: "left",
      style: {
        background: "linear-gradient(to right, #f75e25, #fe0000)",
      }
    }).showToast()


    fetch("../json/propiedades.json")  
    .then((response) => response.json())
    .then((data) => {
      
      setTimeout(() =>  {   // simulo retardo de 5s en respuesta
        propiedades = data
        localStorage.setItem('propiedades', JSON.stringify(propiedades))
        alPresionar(casas, "todas", "casa")
        eventosDOM()

        Toastify({
          text: "Recursos cargados",
          duration: 2000,
          gravity: "bottom",
          position: "left",
          style: {
            background: "linear-gradient(to right, #bdecb6, #2d572c)",
          }
        }).showToast()

      } ,5000)
         
    })
 
  }else{
    alPresionar(casas, "todas", "casa")
    eventosDOM()
  }

  return
}


function eventosDOM(){

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

}



// ============================ SCRIPT ========================= //

let propiedades = []

// declaro las constantes relacionadas al HTML
const casas = document.getElementById("casas")
const apartamentos = document.getElementById("apartamentos")
const alquileres = document.getElementById("alquileres")
const terrenos = document.getElementById("terrenos")
const locales = document.getElementById("locales")
const chacras = document.getElementById("chacras")


propiedadesDestacadas()






