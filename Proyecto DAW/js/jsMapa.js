// Create or retrieve the data
let people = [
    {
      name: 'Ingeniería en  Electricidad: Jimmy Córdova, MSc.',
      latLng: [-2.144414, -79.967468],
      id: '2544ff7'
    },
    {
      name: 'Ingeniería en Electrónica y Automatización: Lisbeth Mena, Msc.',
      latLng: [-2.144598, -79.967515],
      id: 'dkf8897'
    },
    {
      name: 'Ingeniería en Telecomunicaciones: Juan Carlos Avilés, PhD.',
      latLng: [-2.144909, -79.967676],
      id: '2836hf5'
    },
    {
      name: 'Ingeniería en Telemática: Vladimir Sánchez, Mg.',
      latLng: [-2.144813, -79.967891],
      id: 'pkf4897'
    },
    {
      name: 'Ingeniería en Computación: Ginger Saltos, Mg.',
      latLng: [-2.144255, -79.967698],
      id: 'dtf8887'
    },
    {
      name: 'Ingeniería Civil:  Carlos Rodriguez.',
      latLng: [-2.145545 , -79.965306],
      id: 'dkz8891'
    },
];

// Create the group
let group = L.layerGroup(),
    list = document.getElementById('list')

// Create the map
let map = new L.map('map', {
    center: new L.LatLng(-2.145909  , -79.965438),
    zoom: 17,
    maxZoom: 21,
    layers: new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
});

// Loop through the data
people.forEach(person => {
  let marker = L.marker(person.latLng, {
        title: person.name,
        riseOnHover: true
      });
  
  // Add each marker to the group
  group.addLayer( marker );
  
  // Save the ID of the marker with it's data
  person.marker_id = group.getLayerId(marker);
})

// Add the group to the map
group.addTo(map);

// Click handler for handling
function onClick(data) {
  let { marker_id } = data,
      marker = group.getLayer(marker_id);
  
  map.panTo( marker.getLatLng() );
}

// Append list items
people.forEach(person => {
  let item = document.createElement('li');
  
  item.innerHTML = `<a href="#">${person.name}</a>`;
  item.addEventListener('click', onClick.bind(null, person));
  
  list.appendChild(item);
});
