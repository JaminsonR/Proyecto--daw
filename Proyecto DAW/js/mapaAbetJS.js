//Script para coordinador Ing. Eléctricidad
document.getElementById("ingElec").onclick=function(){ingElectricidad()};
document.getElementById("ingEA").onclick=function(){ingElectricidad()};
document.getElementById("ingTeleco").onclick=function(){ingElectricidad()};
document.getElementById("ingTele").onclick=function(){ingElectricidad()};
document.getElementById("ingComp").onclick=function(){ingElectricidad()};


function ingElectricidad() {
        var ubicacion = {lat: -2.144414, lng: -79.967468};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
        console.log("hols")
}

function ingEAutomatizacion(){
	var ubicacion = {lat: -2.144598, lng: -79.967515};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
}

function ingTelecomunicaciones(){
	var ubicacion = {lat: -2.144909, lng: -79.967676};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
}

function ingTelematica(){
	var ubicacion = {lat: -2.144813, lng: -79.967891};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
}

function ingComputacion(){
	var ubicacion = {lat: -2.144255, lng: -79.967698};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
}

