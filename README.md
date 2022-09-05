# Inmobiliaria_Marindia
Curso Javascript / Bermudez

Para la entrega final creé los siguientes scripts JS:

- templateshtml.js _ se usa para las distintas páginas, tiene templates HTML
- datos.js _ declaro clases y cargo los datos de los usuarios, antiguamente cargaba los datos de las propiedades
pero a éstas las pasé a un JSON para cumplir con la consigna de la entrega
- mapas.js _ para cargar el mapa de google que uso en algunas páginas
- index.js _ contiene las funcionalidades principales de la página INDEX.HTML
- busqueda.js _ contiene las funcionalidades de la página BUSQUEDA.HTML
- administrador.js _ contiene las funcionalidades de la página ADMINISTRADOR.HTM

los otros scripts JS son de desafíos anteriores y el script.js es original del template en el cual basé este sitio
(el sitio está basado en un template de Themefisher https://demo.themefisher.com/constra/)



Las funcionalidades hechas por mí son las siguientes:

INDEX - Propiedades destacadas es un filtro preestablecido dónde se muestran las propiedades disponibles
las propiedades se encuentran en un archivo JSON /json/propiedades.json que se carga en el local storage
para cargarlas uso un FETCH con un setTimeout para simular un retardo en la respuesta del servidor

PROPIEDADES - aquí implementé un filtro dinámico dónde se pueden mostrar las propiedades por listado o 
en un mapa

ADMINISTRADOR - se accede desde el footer de la página INDEX. Se puede logear con los usuarios predefinidos
usuario: taba / clave: 123 -- rol administrador  o  usuario: conrado / clave 123 -- rol uauario
el usuario administrador habilita los botones Nueva propiedad y Borrar porpiedad (el usuario con rol usuario
no habilita el botón Borrar propiedad)
El usuario queda logeado en el sessionStorage
