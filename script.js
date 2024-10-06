
function MensajeDeBienvenida(){
    var edad = document.getElementById("edadinput").value;
    if(edad >= 18 ) {
      mensaje= "Bienvenido, usted tiene acceso a todo nuestros servicios.";
    } else {
      mensaje= "Bienvenido, usted tiene acceso a servicios limitados."
    }
    
    document.getElementById("Mensaje").textContent=mensaje;
    }
    