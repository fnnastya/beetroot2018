function createMap() {
	var loc = {lat: 47.815049, lng: 35.174411};
	map = new google.maps.Map(document.querySelector('._map'), {zoom: 4, center: loc});
}