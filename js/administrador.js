
// ======================= Funciones ====================== //

function login(usuario, clave){

  usuarios.forEach(ele => {
  
    if(ele.nombre == usuario & ele.clave == clave){   
      nuevaPropiedad.classList.remove('disabled')  
      borrarPropiedad.classList.remove('disabled')  
    
    }else{
      modal('Nombre de Usuario o clave incorrecta', '')
    } 
  })

  return
}

function listarPropiedadesBorrar(){
  
  let fragment = ''
  propiedades.forEach((ele) => {
    fragment += templateBorrarPropiedad(ele)
  })

  areaAdministrador.innerHTML = fragment
}



// ============================ SCRIPT ========================= //

let propiedades = cargaPropiedades()
let usuarios = cargaUsuarios()


const inputUsuario = document.querySelector("#input-usuario")
const inputClave = document.querySelector("#input-clave")
const loginbtn = document.querySelector("#btn-submit")
const logoutbtn = document.getElementById('btn-logout')
const areaAdministrador = document.getElementById("areaAdministrador")
const nuevaPropiedad = document.getElementById("nuevaPropiedad")
const borrarPropiedad = document.getElementById("borrarPropiedad")



// Habilita botones si correcto usuario y clave
loginbtn.addEventListener('click', (e) => {
  e.preventDefault()

  const usuario = inputUsuario.value
  const clave = inputClave.value
  
  login(usuario, clave)

})

 // ========== Nueva propiedad ====================================== //
nuevaPropiedad.addEventListener('click', () => {
  
  areaAdministrador.innerHTML = templateNuevaPropiedad()

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


  nuevaGuardar.addEventListener('click', (e) => {
    e.preventDefault()
  
    if( nuevaValor.value == '' || nuevaSuperficie.value == '' 
    || (nuevaTipoPropiedad.value != "Terreno" & nuevaDormitorios.value == '')){
  
      modal('Valores incorrectos', 'Revise e intente nuevamente')
  
    }else{
  
      propiedades.push(new Propiedad( propiedades[propiedades.length - 1].id + 1,
        `/images/propiedades/${nuevaFoto.value}`, nuevaTipoOperacion.value, nuevaTipoPropiedad.value, nuevaUbicacion.value, nuevaValor.value,
        nuevaSuperficie.value, nuevaDormitorios.value, nuevaGarage.checked, nuevaPiscina.checked))
  
        localStorage.setItem('propiedades', JSON.stringify(propiedades))

        //modal('Propiedad guardada','')
    }
  })
})


// =================== Borrar Propiedad ================================ //

borrarPropiedad.addEventListener('click', () => {

  listarPropiedadesBorrar()

  window.addEventListener('click', (e) => {

    borrarPropiedady(e.target.id.slice(18))
   
    listarPropiedadesBorrar()

  })

})
