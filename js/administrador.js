
// ======================= Funciones ====================== //
function login(usuario, clave){ // verifica usuario - clave, guarda en sessionStorage y devuelve rol

  let rol = ''
  let correcta = false
  usuarios.forEach(ele => {
    if (ele.nombre === usuario & ele.clave === clave){
      correcta = true
      rol = ele.rol
    }
  })
  sessionStorage.setItem('userID', usuario)
  sessionStorage.setItem('userClave', clave)

  return [correcta, rol]
}


function activarBotones(usuario, clave){ // activa - desactiva botones del DOM

  nuevaPropiedad.classList.remove('disabled')  
  login(usuario, clave)[1] == "administrador" && editarPropiedad.classList.remove('disabled') // solo habilito el boton si es administrador
  loginbtn.setAttribute("disabled", "")
  logoutbtn.removeAttribute("disabled")
  inputUsuario.value = ''
  inputClave.value = ''
  logged.innerHTML = `<h5 class="usuarioLogueado-texto">Bienvenido ${usuario} - ${login(usuario, clave)[1]}</h5>`

  return
}



function listarPropiedadesEditar(elemento){  // lista propiedades en el DOM
  
  let fragment = ''
  propiedades.forEach((ele) => {
    fragment += templateeditarPropiedad(ele)
  })
  elemento.innerHTML = fragment

  return
}



function borrarPropiedad(idborrar, areaEditarPropiedad){ // borra la propiedad seleccionada

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



// ====================================== SCRIPT ========================================== //

// cargo los array
let propiedades = JSON.parse(localStorage.getItem("propiedades"))
let usuarios = cargaUsuarios()

let usuario = sessionStorage.getItem('userID')
let clave = sessionStorage.getItem('userClave')


// declaro los botones principales
const btnPrincipales = document.querySelector("#btnPrincipales")
const inputUsuario = document.querySelector("#input-usuario")
const inputClave = document.querySelector("#input-clave")
const loginbtn = document.querySelector("#btn-submit")
const logoutbtn = document.querySelector('#btn-logout')
const areaAdministrador = document.getElementById("areaAdministrador")
const nuevaPropiedad = document.getElementById("nuevaPropiedad")
const editarPropiedad = document.getElementById("editarPropiedad")
const logged = document.getElementById('usuarioActual')


// ============= Login ================================= //
login(usuario, clave)[0] && activarBotones(usuario, clave) // verifico si estoy logeado en session

loginbtn.addEventListener('click', (e) => {
  e.preventDefault()

  usuario = inputUsuario.value
  clave = inputClave.value
    if (login(usuario, clave)[0]){
    // usuario logeado - habilito / desabilito botones
    toast("Credenciales correctas", 3000, "linear-gradient(to right, #00aae4, #2271b3)")
    activarBotones(usuario, clave)
      
  }else{
    modal('Nombre de Usuario o clave incorrecta', 'Prueba con: taba - 123 o conrado - 123')
  }
})


// ================= Logout ================================== //
logoutbtn.addEventListener('click', (e) =>{
  e.preventDefault()
  nuevaPropiedad.classList.add('disabled')  
  editarPropiedad.classList.add('disabled')
  logoutbtn.setAttribute("disabled", "")
  loginbtn.removeAttribute("disabled")
  logged.innerHTML = ''
  areaAdministrador.innerHTML = ''
  sessionStorage.removeItem('userID')
  sessionStorage.removeItem('userClave')

})


 // ========== Nueva propiedad ====================================== //
nuevaPropiedad.addEventListener('click', () => {
  
  areaAdministrador.innerHTML = templateNuevaPropiedad()
  let id = propiedades[propiedades.length - 1].id + 1
  
  initMap(14)
  let latitud, longitud, mapMarcador, foto
  let idfoto =  "seleccionFoto"

  const nuevaTipoOperacion = document.getElementById('tipoOperacion')
  const nuevaTipoPropiedad = document.getElementById('tipoPropiedad')
  const nuevaUbicacion = document.getElementById('ubicacion')
  const nuevaValor = document.getElementById('inputValor')
  const nuevaSuperficie = document.getElementById('inputSuperficie')
  const nuevaDormitorios = document.getElementById('inputDormitorios')
  const nuevaGarage = document.getElementById('inputGarage')
  const nuevaPiscina = document.getElementById('inputPiscina')
  const selectorFotos = document.getElementById('selectorFotos')
  const nuevaGuardar = document.getElementById('guardarPropiedad')

  // Selecciono foto de casa
  selectorFotos.addEventListener('click', (e) => {

    idfoto != "seleccionFoto" && document.getElementById(idfoto).classList.remove("selected")
  
    //slice(13) es para tomar solo la parte numerica del id: "seleccionFotoN"
    idfoto = "seleccionFoto" + e.target.id.slice(13)
    document.getElementById(idfoto).classList.add("selected")
    foto = `/images/propiedades/nuevapropiedad${e.target.id.slice(13)}.png`
  })
  
  // Agrego evento de click sobre el mapa
  google.maps.event.addListener(map, "click", function (event) {
    let latLng = event.latLng;

    if (mapMarcador != null){ // si ya hay un marcador lo borro
      mapMarcador.setMap(null)
      mapMarcador = null
    }

    mapMarcador = new google.maps.Marker({ 
       position: new google.maps.LatLng(latLng.lat(), latLng.lng()),
        map: map,
        title: "ID: " + id.toString()
      })  
    
    latitud = latLng.lat()
    longitud = latLng.lng()
  })


  // Guardar propiedad en local storage
  nuevaGuardar.addEventListener('click', (e) => {
    e.preventDefault()
  
    id = propiedades[propiedades.length - 1].id + 1
    
    // Validacion de datos
    if (isNaN(nuevaValor.value) || nuevaValor.value < 1){
      toast("Debe ingresar un valor", 3000, "linear-gradient(to right, #c82a54, #ef280f)")

    }else if (isNaN(nuevaSuperficie.value) || nuevaSuperficie.value < 1){
      toast("Debe ingresar una superficie", 3000, "linear-gradient(to right, #c82a54, #ef280f)")

    }else if ((isNaN(nuevaDormitorios.value) || nuevaDormitorios.value < 1 ) & nuevaTipoPropiedad.value != 'Terreno'){
      toast("Debe ingresar la cantidad de dormitorios", 3000, "linear-gradient(to right, #c82a54, #ef280f)")

    }else{ // guardo nueva propiedad si los datos son validos
        
      propiedades.push(new Propiedad(
        id,
        foto,
        nuevaTipoOperacion.value,
        nuevaTipoPropiedad.value,
        nuevaUbicacion.value,
        nuevaValor.value,
        nuevaSuperficie.value,
        nuevaDormitorios.value,
        nuevaGarage.checked,
        nuevaPiscina.checked,
        latitud,
        longitud
        ))
  
      localStorage.setItem('propiedades', JSON.stringify(propiedades))
      modal('Propiedad guardada','')
      areaAdministrador.innerHTML = ''

    }
  })
})


// =================== Editar Propiedad ================================ //

editarPropiedad.addEventListener('click', () => {

  areaAdministrador.innerHTML = '<div id="containerEdicion"></div>'
  const areaEditarPropiedad = document.getElementById('containerEdicion')
  listarPropiedadesEditar(areaEditarPropiedad)

  areaEditarPropiedad.addEventListener('click', (e) => {
    //slice(18) es para tomar solo la parte numerica del id: "btneditarPropiedadNNN"
    borrarPropiedad(e.target.id.slice(18), areaEditarPropiedad)
  })
})
