
function loadCourse() {
    
    var id = window.location.href.slice(window.location.href.indexOf('?') + 1);
    
    $.getJSON("data/courses.json", function(data) {
        $.each(data, function(key, val) {
            if (val["id"] == id){
                var nombre = val["nombre"];
                var paralelo = val["paralelo"];

                $("#course_name").text(nombre);
                $("#course_par").text("Paralelo: " + paralelo);
                
            }

        });
  
    });


}

//Capturar evento de seleccion de opcion Importar Calificaciones solo en la pagina curso_select
if (window.location.href.toLowerCase().indexOf("curso_select.html") >= 0){

   $(document).ready(function() 
 {
    $('.figure').click(function(event) 
    { 
        
        var id = window.location.href.slice(window.location.href.indexOf('?') + 1);
        if ($(this).attr("id") == "Importar calificaciones"){
            window.location.href = "importarCalificaciones.html" + "?" + id;
            
        }
    });
 });
  


 
}


//Capturar evento de seleccion de opcion ver estadisticas solo en la pagina curso_select
if (window.location.href.toLowerCase().indexOf("curso_select.html") >= 0){

   $(document).ready(function() 
 {
    $('.figure').click(function(event) 
    { 
        
        var id = window.location.href.slice(window.location.href.indexOf('?') + 1);
        if ($(this).attr("id") == "Ver estadisticas"){
            window.location.href = "estadisticas.html" + "?" + id;
            
        }
    });
 });
  


 
}

$(window).load(function() {

    loadCourse();  
  

});

