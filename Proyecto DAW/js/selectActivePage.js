$(document).ready(function() {
         
          
			if (window.location.href.indexOf("equipoABET.html") >= 0){
				$('.equipo').addClass("active");

			}else if (window.location.href.indexOf("inicio.html") >= 0){
				$('.inicio').addClass("active");

			}else if (window.location.href.indexOf("TimeLine.html") >= 0){
				$('.TimeLine').addClass("active");

			}else if (window.location.href.indexOf("calendario.html") >= 0){
				$('.calendario').addClass("active");

			}else if (window.location.href.indexOf("lightgallery/galeria.html") >= 0){
				$('.galeria').addClass("active");
			}
});



