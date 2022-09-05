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
 
// Usuarios
function crearUsuarios(){
  const array = []
  array.push(new Usuario( 1, "taba", "123", "administrador" ))
  array.push(new Usuario( 2, "conrado", "123", "usuario" ))
  array.push(new Usuario( 3, "rocco", "123", "usuario" ))

  return array
}



// ======= CARGA DE USUARIOS AL LOCAL STORAGE =============== ///

function cargaUsuarios(){
  
  let usuarios = JSON.parse( localStorage.getItem("usuarios"))

  if(!usuarios){
    usuarios = crearUsuarios()
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }

  return usuarios
}



// ===============================
console.log('DATOS')