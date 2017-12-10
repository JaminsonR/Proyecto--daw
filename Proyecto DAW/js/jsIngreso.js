function ingresar(){
if (document.form.password.value=='abet' && document.form.username.value=='abet'){ 
        var link=document.getElementById('submit');
        link.onclick = function() {
        	location.href = "inicio.html";
    	}
} 
else{ 
    alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    	location.reload();
    } 
} 

