// ======================== CLASES ======================== //
class Propiedad{
  constructor(id, foto, tipoOperacion, tipoPropiedad, ubicacion, valor, superficie, dormitorios, garage, piscina, latitud, longitud){
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
    this.latitud = latitud
    this.longitud = longitud 
  }
}

class Usuario{
  constructor(id, nombre, clave, rol){ //roles administrador, supervisor, usuario
    this.id = id
    this.nombre = nombre
    this.clave = clave
    this.rol =  rol
  }
}

// =========================== DATOS ======================== //

// Propiedades
function crearPropiedades(){

  const array = []
  array.push(new Propiedad( 1, "/images/propiedades/casa1.png", "alquiler", "casa", "Marindia", 25000, 150, 3, true, true, -34.774791, -55.825087))
  array.push(new Propiedad( 2, "/images/propiedades/casa2.png", "alquiler", "casa", "Salinas", 20000, 100, 2, true, false, -34.776871, -55.834335))
  array.push(new Propiedad( 3, "/images/propiedades/casa3.png", "alquiler", "casa", "Salinas", 15000, 70, 2, true, true, -34.772588, -55.845171))
  array.push(new Propiedad( 4, "/images/propiedades/apartamento1.png", "alquiler", "apartamento", "Marindia", 12000, 60, 2, false, false, -34.769645, -55.824551))
  array.push(new Propiedad( 5, "/images/propiedades/apartamento2.png", "alquiler", "apartamento", "Pinamar", 14000, 70, 2, false, false, -34.784661, -55.855471))
  array.push(new Propiedad( 6, "/images/propiedades/apartamento3.png", "alquiler", "apartamento", "Salinas", 10000, 50, 1,true, false, -34.764515, -55.841545))
  array.push(new Propiedad( 7, "/images/propiedades/apartamento4.png", "venta", "apartamento", "Pinamar", 85500, 62, 2, false, true, -34.7646709, -55.857810))
  array.push(new Propiedad( 8, "/images/propiedades/apartamento5.png", "venta", "apartamento", "Marindia", 52600, 40, 1, false, false, -34.776604, -55.820488))
  array.push(new Propiedad( 9, "/images/propiedades/casa4.png", "venta", "casa", "Salinas", 120000, 120, 3, true, false, -34.783708, -55.842155))
  array.push(new Propiedad( 10, "/images/propiedades/casa5.png", "venta", "casa", "Pinamar", 100000, 100, 2, false, false, -34.789066, -55.853504))
  array.push(new Propiedad( 11, "/images/propiedades/casa7.png", "venta", "casa", "Salinas", 180000, 70, 2, true, true, -34.776231, -55.845493))
  array.push(new Propiedad( 12, "/images/propiedades/casa6.png", "venta", "casa", "Marindia", 120000, 180, 4, true, false, -34.772865, -55.815086))
  array.push(new Propiedad( 13, "/images/propiedades/terreno1.png", "venta", "terreno", "Marindia", 50000, 720, 0, false, false, -34.766509, -55.831139))
  array.push(new Propiedad( 14, "/images/propiedades/terreno2.png", "venta", "terreno", "Salinas", 70000, 1000, 0, false, false, -34.775482, -55.830958))
  array.push(new Propiedad( 15, "/images/propiedades/terreno3.png", "venta", "terreno", "Pinamar", 60000, 800, 0, false, false, -34.786300, -55.857722))

  return array
}
 

// Usuarios
function crearUsuarios(){
  const array = []
  array.push(new Usuario( 1, "taba", "123", "administrador" ))

  return array
}



// ============================== CARGA DE DATOS AL LOCAL STORAGE =============== ///
function cargaPropiedades(){
  
  let propiedades = JSON.parse( localStorage.getItem("propiedades"))

  if(!propiedades){
    propiedades = crearPropiedades()
    localStorage.setItem('propiedades', JSON.stringify(propiedades))
  }

  return propiedades
}


function cargaUsuarios(){
  
  let usuarios = JSON.parse( localStorage.getItem("usuarios"))

  if(!usuarios){
    usuarios = crearUsuarios()
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }

  return usuarios
}


// ==================================== BORRAR PROPIEDADES ==================== //

function borrarPropiedad(idborrar, areaEditarPropiedad){

  if (idborrar != ""){
    
    Swal.fire({
      title: 'Desea borrar la propiedad?',
      showDenyButton: true,
      icon: 'warning',
      confirmButtonText: 'Si, borrar',
      denyButtonText: `No, cancelar`,
      confirmButtonColor: '#d33',
      denyButtonColor: '#008000',
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire('Borrada!', '', 'success')
        propiedades.splice(propiedades.findIndex((e) => e.id == idborrar), 1)
        localStorage.setItem('propiedades', JSON.stringify(propiedades))
        listarPropiedadesEditar(areaEditarPropiedad)

      } else if (result.isDenied) {
        Swal.fire('No se ha borrado la propiedad', '', 'info')
        
      }
    })
      
  }
  
  return 
}


console.log('DATOS')