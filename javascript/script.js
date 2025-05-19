



    const formulario = document.getElementById("formularioPin"); //seleccionar el formulario   
    const campoPin = document.getElementById("pinIngresado");  //seleccionar el input 
    const mensajeErrorElemento = document.getElementById("mensajeError"); //seleccionar error
    const pinCorrecto = "1234"; //pin para poder ingresar al sitio web

    const botonPaginaIngresar = document.getElementById("botonPaginaIngresar"); //boton para ir a la pagina de ingresos
    const botonPaginaRetirar = document.getElementById("botonPaginaRetirar");  //boton para ir a la pagina de retiros
    const botonPaginaSaldo = document.getElementById("botonPaginaSaldo");   //boton para ir a la pagina de saldo
    const botonPaginaPagos = document.getElementById("botonPaginaPagos");   //boton para ir a la pagina de transacciones
    const cerrarsession = document.getElementById("cerrarsesion");   //boton para ir a la pagina de index


    // Código para la página del PIN (index.html)
    if (formulario && campoPin && mensajeErrorElemento) {
        formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const pinUsuario = campoPin.value;

        if (pinUsuario === pinCorrecto) {
            window.location.href = "transacion.html";
        } else {
            mensajeErrorElemento.style.display = "block";
        }
    });
    }

    // Código para la página de transacciones (transacion.html)
    if (botonPaginaIngresar) {
        botonPaginaIngresar.addEventListener("click", function() {
            window.location.href = "ingresar.html";
        });
    }

    if (botonPaginaRetirar) {
        botonPaginaRetirar.addEventListener("click", function() {
            window.location.href = "retirar.html";
        });
    }

    if (botonPaginaSaldo) {
        botonPaginaSaldo.addEventListener("click", function() {
            window.location.href = "saldo.html";
        });
    }

    if (botonPaginaPagos) {
        botonPaginaPagos.addEventListener("click", function() {
            window.location.href = "pagos.html";
        });
    }
    if (cerrarsession) {
        cerrarsession.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }