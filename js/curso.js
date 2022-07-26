// ==================== OBJETOS ================= //

// objeto casa1
const casa1 = {
  id: 1,
  ubicacion: "Marindia",
  antiguedad: 25,
  superficie: 120,
  paredes: "ladrillos",
  techo: "planchada",
  banios: 2,
  garage: true,
  tel: {
    area: 598,
    num: 99854533,
    company: "Antel"
  }
}

// es lo mismo
console.log( casa1.id )
console.log( casa1["id"])

//cambio valor de propiedad
casa1.antiguedad = 30

//agrego nueva propiedad al objeto -- no es buena practica
casa1.piso = "madera"

//subobjetos
console.log( casa1.tel.company)



// ======================== CONSTRUCTORES ======================== //

const producto1 = {   //declaracion objeto basico
  id: 13,
  nombre: "Producto 1",
  stock: 100,
  precio: 12000
}


function Producto(id, nombre, stock, precio) {  //o puedo usar este constructor donde le paso los parametros
  this.id = id
  this.nombre = nombre
  this.stock = stock
  this.precio = precio

  this.calcularIva = function(){
    return this.precio * 1.22
  }
}

const producto2 = new Producto(1, "Zapato XL", 50, 22000) //asi declaro un nuevo objeto
const producto3 = new Producto(2, "Zapato L", 100, 20000)



// ========================== METODOS ======================= //

function Mascota(nombre, tipo, edad){
  this.nombre = nombre
  this.tipo = tipo
  this.edad = edad

  this.saludar = function(){         //metodo de objeto
    console.log(this.nombre + " dice hola!!")
  }

  this.cumplirAnios = function(){  //aumento la edad cada vez que lo llamo
    this.edad ++
  }

}

const mascota1 = new Mascota("Pirulo", "perro", 6)
const mascota2 = new Mascota("Coco", "gato", 4)
const mascota3 = new Mascota("Rabit", "conejo", 6)


mascota1.saludar()  //asi llamo al metodo
mascota1.cumplirAnios()



// ========================== CLASES ========================= //


class Mascota2{
  // contructor - props
  contructor (nombre, tipo, edad){
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad
    this.vivo = true
  }

  // listar metodos
  saludar = function(){ 
    if(this.vivo){
      console.log(this.nombre + " dice hola!!")
    }        
      console.log("tengo una mala noticia..")
  }

  cumplirAnios = function(){  //aumento la edad cada vez que lo llamo
    this.edad ++
  }

  fallecer = function(){
    this.vivo = false
  }
}


