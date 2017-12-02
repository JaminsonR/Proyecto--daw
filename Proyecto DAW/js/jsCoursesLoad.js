

function load_courses() {


    $.getJSON("data/courses.json", function(data) {
        $.each(data, function(key, val) {
            var nombre = val["nombre"];
            var paralelo = val["paralelo"];
            var id = val["id"];
            var li = $('<li></li>');
            li.attr("id",id);
            li.text(nombre + " | Paralelo: " + paralelo);
            
            $('#course_selection').append(li);
        });
    });	
}

//Capturar evento de seleccion de curso
$("#course_selection").on("click", "li", function(event){
   
    window.location.href = "curso_select.html" + "?" + $(this).attr("id");
});


window.onload = function(){
	load_courses();

}

