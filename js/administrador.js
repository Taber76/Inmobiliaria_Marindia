

// =============== TEMPLATES ================= //


function templateNuevaPropiedad(){

return `<form class="row g-3">

<div class="col-md-4 py-2">
  <label for="tipoOperacion" class="form-label">Tipo de operacion</label>
  <select id="tipoOperacion" class="form-control">
    <option selected>Venta</option>
    <option>Alquiler</option>
  </select>
</div>

<div class="col-md-4 py-2">
  <label for="tipoPropiedad" class="form-label">Tipo de propiedad</label>
  <select id="tipoPropiedad" class="form-control">
    <option selected>Casa</option>
    <option>Apartamento</option>
    <option>Terreno</option>
  </select>
</div>

<div class="col-md-4 py-2">
  <label for="ubicacion" class="form-label">Ubicacion</label>
  <select id="ubicacion" class="form-control">
    <option selected>Marindia</option>
    <option>Pinamar</option>
    <option>Salinas</option>
  </select>
</div>

<div class="col-md-4 py-2">
  <label for="inputValor" class="form-label">Valor</label>
  <input type="text" class="form-control" id="inputValor" placeholder="UDS(venta) / UYU(alquiler)">
</div>

<div class="col-md-4 py-2">
  <label for="inputSuperficie" class="form-label">Superficie m<sup>2</sup></label>
  <input type="text" class="form-control" id="inputSuperficie">
</div>

<div class="col-md-4 py-2">
  <label for="inputDormitorios" class="form-label">Cantidad de dormitorios</label>
  <input type="text" class="form-control" id="inputDormitorios" placeholder="">
</div>

<div class="col-md-3 py-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="inputGarage">
    <label class="form-check-label" for="inputGarage">
      Garage
    </label>
  </div>
</div>

<div class="col-md-3 py-2">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="inputPiscina">
    <label class="form-check-label" for="inputPiscina">
      Piscina
    </label>
  </div>
</div>

<div class="col-12 py-2">
  <label for="inputFoto" class="form-label">Foto</label>
  <input type="text" class="form-control" id="inputFoto" placeholder="URL de la foto">
</div>

<div class="col-12 pt-5">
  <button type="submit" class="btn btn-primary" id="gaurdarPropiedad">Guardar</button>
</div>

</form>
`
}


// ======================= Login ====================== //

function login(usuario, clave){
  if(usuario === 'taba' & clave === '123'){
    
    for (let i = 0; i < botones.length; i++){   //no pude recorrer botones con un forEach!!
     
      if(botones[i].classList.contains('disabled')){
        botones[i].classList.remove('disabled')
      }
    }

  return true
  }

return false
}


// ============================ SCRIPT ========================= //


const inputUsuario = document.querySelector("#input-usuario")
const inputClave = document.querySelector("#input-clave")
const formlogin = document.querySelector("#formlogin")
const botones = document.getElementsByClassName("btn")
const areaAdministrador = document.getElementById("areaAdministrador")
let loginUser = false


formlogin.addEventListener('click', (e) => {
  e.preventDefault()

  const usuario = inputUsuario.value
  const clave = inputClave.value
  
  loginUser = login(usuario, clave)

  if (loginUser){

    const nuevaPropiedad = document.getElementById("nuevaPropiedad")

    nuevaPropiedad.addEventListener('click', () => {
      
      areaAdministrador.innerHTML = templateNuevaPropiedad()

    })

  }
})






