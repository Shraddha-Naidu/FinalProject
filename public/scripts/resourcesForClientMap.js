// Client Resources Page Map Generator Script
let map = L.map('map').setView([49.273376, -123.103834], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([49.273376, -123.103834]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

  function initMap() {
    let locationOptions = {
      zoom: 5,
      center: {lat: 49.2827, lng: -123.1207}
    }

    const myLatLng = { lat: 49.2583, lng: -123.08508918858796};

    let map = new google.maps.Map(document.getElementById("map"), locationOptions)
    
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }