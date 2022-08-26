
let map

// Carga mapa
function initMap(zoom) {
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: {
            lat: -34.774994, 
            lng: -55.840184
        },
        mapTypeId: 'roadmap'
    })
}