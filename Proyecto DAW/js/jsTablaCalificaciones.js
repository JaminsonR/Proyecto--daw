

function llenarTabla() {
    var id = window.location.href.slice(window.location.href.indexOf('?') + 1)
    var url = ""
    //Buscar curso selecccionado
    $.getJSON("data/courses.json", function(data) {
            $.each(data, function(key, val) {
                var url = val["calificaciones"];
                if (val["id"] == id){
                     $.getJSON(url, function(notas) {
                        for(clave in notas) {
                            var calificaciones = notas[clave];

                            var tbody = document.getElementById("cuerpotabla-calificaciones");
                            var newTr = document.createElement("tr");
                            //newTr.setAttribute('id','calificaciones'+clave[1]);
                            tbody.appendChild(newTr);

                            var numTd = document.createElement("td");
                            var num = document.createTextNode(calificaciones["estudiante"]);
                            numTd.appendChild(num);

                            var fotoTd = document.createElement("td");
                            var src = document.createTextNode(calificaciones["foto"]).data;
                            var img = document.createElement("img");
                            img.src=src;
                            img.style.height="5rem";
                            img.style.width="6rem";
                            /*$(img).attr("src", src1);*/
                            fotoTd.appendChild(img);

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
                            newTr.appendChild(fotoTd);
                            newTr.appendChild(matriculaTd);
                            newTr.appendChild(nombresTd);
                            newTr.appendChild(apellidosTd);
                            newTr.appendChild(leccion1Td);
                            newTr.appendChild(leccion2Td);
                            newTr.appendChild(leccion3Td);
                            tbody.appendChild(newTr);
                        }
                    });
                }
            }); 
    });

   
}


$(window).load(function() {
	llenarTabla();
});