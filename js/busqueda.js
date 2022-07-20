let colores = new Array("olive", "red", "blue", "black");

let contador = 1

$("#capa").on("click", function(){
 	$("#resultado").html("<h3>Has realizado " + contador + "clicks</h3>")
  contador = contador + 1
  $(this).css("background-color", colores[contador])
  if (contador>colores.length){
    $(this).css("background-color", "yellow")
  }		    	
})