
// ======================= Funciones ====================== //

function login(usuario, clave){ 

  let rol = ''
  let correcta = false
  
  usuarios.forEach(ele => {
    if (ele.nombre === usuario & ele.clave === clave){
      correcta = true
      rol = ele.rol
    }
  })

  return [correcta, rol]
}



function listarPropiedadesEditar(elemento){  
  
  let fragment = ''
  propiedades.forEach((ele) => {
    fragment += templateeditarPropiedad(ele)
  })

  elemento.innerHTML = fragment

  return
}



// =============================== SCRIPT ============================= //

// cargo los array
let propiedades = cargaPropiedades()
let usuarios = cargaUsuarios()


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
loginbtn.addEventListener('click', (e) => {
  e.preventDefault()

  const usuario = inputUsuario.value
  const clave = inputClave.value
  

  if (login(usuario, clave)[0]){
    // usuario logeado - habilito / desabilito botones

    nuevaPropiedad.classList.remove('disabled')  
    editarPropiedad.classList.remove('disabled')
    loginbtn.setAttribute("disabled", "")
    logoutbtn.removeAttribute("disabled")
    inputUsuario.value = ''
    inputClave.value = ''
    logged.innerHTML = `<h5 class="usuarioLogueado-texto">Bienvenido ${usuario} - ${login(usuario, clave)[1]}</h5>`
      
  }else{
    modal('Nombre de Usuario o clave incorrecta', '')
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

})



 // ========== Nueva propiedad ====================================== //
nuevaPropiedad.addEventListener('click', () => {
  
  areaAdministrador.innerHTML = templateNuevaPropiedad()
  let id = propiedades[propiedades.length - 1].id + 1
  
  initMap(14)
  let latitud, longitud, mapMarcador 

  const nuevaTipoOperacion = document.getElementById('tipoOperacion')
  const nuevaTipoPropiedad = document.getElementById('tipoPropiedad')
  const nuevaUbicacion = document.getElementById('ubicacion')
  const nuevaValor = document.getElementById('inputValor')
  const nuevaSuperficie = document.getElementById('inputSuperficie')
  const nuevaDormitorios = document.getElementById('inputDormitorios')
  const nuevaGarage = document.getElementById('inputGarage')
  const nuevaPiscina = document.getElementById('inputPiscina')
  const nuevaFoto = document.getElementById('inputFoto')
  const nuevaGuardar = document.getElementById('guardarPropiedad')

  
  // Agrego evento de click sobre el mapa
  google.maps.event.addListener(map, "click", function (event) {
    let latLng = event.latLng;

    if (mapMarcador != null){
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


  nuevaGuardar.addEventListener('click', (e) => {
    e.preventDefault()
  
    id = propiedades[propiedades.length - 1].id + 1
    
    if( nuevaValor.value == '' || nuevaSuperficie.value == '' 
    || (nuevaTipoPropiedad.value != "Terreno" & nuevaDormitorios.value == '')){
  
      modal('Valores incorrectos', 'Revise e intente nuevamente')
  
    }else{ // guardo nueva propiedad si los datos son validos
  
      propiedades.push(new Propiedad(
        id,
        `/images/propiedades/${nuevaFoto.value}`,
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
