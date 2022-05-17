  // Map Generator Script
  let map = L.map('map').setView([49.273376, -123.103834], 1);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([49.273376, -123.103834]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

  
  // Populate Map with Resources from Database
  // Populate Map with Clients from clientList