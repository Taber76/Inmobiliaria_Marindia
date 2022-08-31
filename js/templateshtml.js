
// =============== TEMPLATES PAGINA INDEX ================= //


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
        <span class="gallery-icon">Mas detalles</span>
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



// =============== TEMPLATES PAGINA BUSQUEDA ================= //

// genero fragmento HTML segun tipo de operacion y propiedad
function templateSegunPropiedad (prop){
  fragment = ``

  let moneda = "USD"
  prop.tipoOperacion.toLowerCase() == "alquiler" && (moneda = "UYU")
  

  fragment += `<div class="col-md-4 gap-3" style="padding: 20px;" id="template">
                <div class="card">
                    <img src="${prop.foto}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${prop.ubicacion} / ${prop.tipoPropiedad} - ${moneda} ${prop.valor}</h5>
                    <h5 class="card-text">${prop.tipoOperacion.toUpperCase()}</h5>
                  </div>`
               
  switch (prop.tipoPropiedad.toLowerCase()){
    case "terreno":
      fragment += `<ul class="list-group list-group-flush">
                      <li class="list-group-item">Superficie ${prop.superficie}m2</li>
                    </ul>
                  </div>
                </div>`   
      break
    default: // si no es terreno
      // agrego superficie
      fragment += `<ul class="list-group list-group-flush">
                    <li class="list-group-item">Superficie ${prop.superficie}m2</li>`   

      // agrego dormitorios
      fragment += `<li class="list-group-item">${prop.dormitorios} dormitorio`
      prop.dormitorios < 2 ? fragment += `</li>` :  fragment += `s</li>` // OPERADOR TERNARIO=========================
      

      // agrego garage y/o piscina
      if(prop.garage){ 
        fragment += `<li class="list-group-item">Cuenta con garage`
        prop.piscina ? fragment += ` y piscina</li>` :  fragment += `</li>` // OPERADOR TERNARIO=========================
      }else{
        prop.piscina && (fragment += `<li class="list-group-item">Cuenta con piscina</li>`) // OPERADOR LOGICO AND===========
      }

      // completo fragment
      fragment += `</ul>
                </div>
              </div>`
              
  }
  return fragment
}


// No hay propiedades que coincidan con el criterio de busqueda
function templateNotFound(){
  let card =
  `<div class="row justify-item-center">
      <div class="col-12">
        <h3 class="mt-5 mb-5">No se encontraron resultados</h3>
      </div>
    </div>`
  return card
}


// InfoWindows para el mapa

function contenidoHTMLInfoWindow(prop){

  let moneda = "USD"
  if(prop.tipoOperacion.toLowerCase() == "alquiler"){
    moneda = "UYU"
  }

  let card =
  ` <div class="container">  
      <div class="row">
        
        <div class="col-md-6">
          <img src="${prop.foto}" class="card-img-top" alt="">
        </div>
        
        <div class="col-md-3 justify-content-center"> 
          <h4>${prop.ubicacion}</h4>       
          <h5>${prop.tipoOperacion.toUpperCase()}</h5>
          <h5>Superficie: ${prop.superficie}m<sup>2</sup></h5>
          <h5>Dormitorios: ${prop.dormitorios}</h5>
          <h5>ID: ${prop.id}</h5>
        </div>

        <div class="col-md-3 justify-content-center">
          <h5>${prop.tipoPropiedad.toUpperCase()}</h5>
          <h5>${moneda} ${prop.valor}</h5>        
        </div>

      </div>
    </div>`
  return card
}




// =============== TEMPLATES PAGINA ADMINISTRADOR ================= //
function templateNuevaPropiedad(){

  return `<form class="areaNuevaPropiedad row g-3">
  
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
    <input type="text" class="form-control" id="inputSuperficie" placeholder="">
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
    <input type="file" class="form-control" id="inputFoto" placeholder="Nombre de archivo de la foto">
  </div>

  <div id="map" class="col-12 py-2 mapaAdministrador"></div>
  
  <div class="col-12 pt-5">
    <div type="" class="btn btn-primary" id="guardarPropiedad">Guardar</div>
  </div>
  
  </form>
  `
}


function templateeditarPropiedad(prop){

  let card = 
  `   <div class="row border mb-5">
        <div class="col-md-3">
          <img src="${prop.foto}" class="card-img-top" alt="">
        </div>
        <div class="col-md-3 justify-content-center"> 
          <h5>ID: ${prop.id}</h5>
          <h5>${prop.tipoPropiedad}</h5>
          <h5>${prop.tipoOperacion}</h5>
          <h5>${prop.ubicacion}</h5>
        </div>

        <div class="col-md-3 justify-content-center"> 
          <h5>Valor: ${prop.valor}</h5>
          <h5>Superficie: ${prop.superficie}</h5>
        </div>
        <div class="col-md-3 justify-content-center">
          <button id="btneditarPropiedad${prop.id}" class="btn btn-danger mt-2">BORRAR</button>
        </div>
      </div>
  `
  return card
}
  

// ==================== MODAL =================== // 

function modal(titulo, subtitulo){

  let card = 
  `<div class="modal">
      <h3>${titulo}</h3>
      <h4>${subtitulo}</h4>
      <button id="modal-close" class="btn btn-primary">Aceptar</button>
    </div>`

  document.getElementById('modal-container').innerHTML = card
  
  const cerrarModal = document.querySelector('#modal-close')
  cerrarModal.addEventListener('click', () => {
    document.getElementById('modal-container').innerHTML = ''
  })

  return
}


console.log('TEMPLATES OK')