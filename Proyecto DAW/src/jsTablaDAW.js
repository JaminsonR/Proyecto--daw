var http_request = false;

function makeRequest(url,type) {
    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType(type);
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }

    if (type == "application/json"){
    	http_request.onreadystatechange = alertContentsJSON;
    } else {
    	http_request.onreadystatechange = alertContentsXML;
    }

    http_request.open('GET', url, true);
    http_request.send(null);
}

function llenarTabla(calificacionesDAW) {
	for(clave in calificacionesDAW) {
		var calificaciones = calificacionesDAW[clave];

		var tbody = document.getElementById("cuerpotabla-calificacionesDAW");
		var newTr = document.createElement("tr");
		newTr.setAttribute('id','calificaciones'+clave[3]);
		tbody.appendChild(newTr);

		var numTd = document.createElement("td");
		var num = document.createTextNode(clave[3]);
		numTd.appendChild(num);

		var matriculaTd = document.createElement("td");
		var matricula = document.createTextNode(calificaciones["matricula"]);
		matriculaTd.appendChild(matricula);

		var nombresTd = document.createElement("td");
		var nombres = document.createTextNode(calificaciones["nombres"]);
		nombresTd.appendChild(nombres);

		var apellidosTd = document.createElement("td");
		var apellidos= document.createTextNode(calificaciones["apellidos"]);
		apellidosTd.appendChild(apellidos);

        var leccion1Td = document.createElement("td");
        var leccion1= document.createTextNode(calificaciones["leccion1"]);
        leccion1Td.appendChild(leccion1);

        var leccion2Td = document.createElement("td");
        var leccion2= document.createTextNode(calificaciones["leccion2"]);
        leccion2Td.appendChild(leccion2);

        var leccion3Td = document.createElement("td");
        var leccion3= document.createTextNode(calificaciones["leccion3"]);
        leccion3Td.appendChild(leccion3);

		newTr.appendChild(numTd);
		newTr.appendChild(matriculaTd);
		newTr.appendChild(nombresTd);
		newTr.appendChild(apellidosTd);
        newTr.appendChild(leccion1Td);
        newTr.appendChild(leccion2Td);
        newTr.appendChild(leccion3Td);
        tbody.appendChild(newTr);
	}
}

function alertContentsJSON() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            var calificacionesDAW = JSON.parse(http_request.response);
            llenarTabla(calificacionesDAW);
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

window.onload = function(){
	makeRequest('calificacionesDAW.js','application/json');
}