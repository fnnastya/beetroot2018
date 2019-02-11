var map = null;
function createMap() {
var loc = {lat: -34.397, lng: 150.644};
map = new google.maps.Map(document.querySelector('._map'), {zoom: 6, center: loc});
}
