



    const formulario = document.getElementById("formularioPin"); //seleccionar el formulario   
    const campoPin = document.getElementById("pinIngresado");  //seleccionar el input 
    const mensajeErrorElemento = document.getElementById("mensajeError"); //seleccionar error
    const pinCorrecto = "1234"; //pin para poder ingresar al sitio web

    formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); 

    const pinUsuario = campoPin.value;

    if (pinUsuario === pinCorrecto) {
      window.location.href = "transacion.html"; // Redirigir a otra página

    } else {
       mensajeErrorElemento.style.display = "block"; //hacer visible el h2
    }
  });

    