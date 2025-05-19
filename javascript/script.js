



    const formularioPin = document.getElementById("formularioPin"); //seleccionar el formulario del pin
    const campoPin = document.getElementById("pinIngresado");  //seleccionar el input del pin
    const mensajeErrorElemento = document.getElementById("mensajeError"); //seleccionar error
    const pinCorrecto = "1234"; //pin para poder ingresar al sitio web

    const botonPaginaIngresar = document.getElementById("botonPaginaIngresar"); //boton para ir a la pagina de ingresos
    const botonPaginaRetirar = document.getElementById("botonPaginaRetirar");  //boton para ir a la pagina de retiros
    const botonPaginaSaldo = document.getElementById("botonPaginaSaldo");   //boton para ir a la pagina de saldo
    const botonPaginaPagos = document.getElementById("botonPaginaPagos");   //boton para ir a la pagina de transacciones
    const cerrarsession = document.getElementById("cerrarsesion");   //boton para ir a la pagina de index
    const regresar = document.getElementById("regresar");   //boton para regresar a la pagina de transaciones

    const formularioIngresos = document.getElementById("formularioIngresos"); //seleccionar el formulario para ingresar
    const cIngresos = document.getElementById("cIngresos");  //monto a ingresar
    const mensajeErrorIngresos = document.getElementById("mensajeErrorIngresos"); //seleccionar error
 0
    let saldo = 500; // Saldo inicial
    let montoTotal = 500;
    const transacciones = [];


    // Código para la página del PIN (index.html)
    if (formularioPin) {
        formularioPin.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const pinUsuario = campoPin.value;

        if (pinUsuario === pinCorrecto) {
            window.location.href = "transacion.html";
        } else {
            mensajeErrorElemento.style.display = "block";
        }
    });
    }

    // Código para ir a la pagina ingresos
    if (botonPaginaIngresar) {
        botonPaginaIngresar.addEventListener("click", function() {
            window.location.href = "ingresar.html";
        });
    }

    // Código para ir a la pagina egresos
    if (botonPaginaRetirar) {
        botonPaginaRetirar.addEventListener("click", function() {
            window.location.href = "retirar.html";
        });
    }

    // Código para ir a la pagina saldo
    if (botonPaginaSaldo) {
        botonPaginaSaldo.addEventListener("click", function() {
            window.location.href = "saldo.html";
        });
    }

    // Código para ir a la pagina pagos
    if (botonPaginaPagos) {
        botonPaginaPagos.addEventListener("click", function() {
            window.location.href = "pagos.html";
        });
    }

    // Código para cerrar sesion
    if (cerrarsession) {
        cerrarsession.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }

    // Código para regresar a la pagina transacciones
    if (regresar) {
        regresar.addEventListener("click", function() {
            window.location.href = "transacion.html";
        });
    }

    // Código para ingresar un monto 
    if (formularioIngresos) {
        saldo = cargarSaldo();
        montoTotal = cargarMontoTotal();
        const transacciones = cargarTransacciones();

    formularioIngresos.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Evitar la recarga de la página

        const monto = parseFloat(cIngresos.value); // Obtener el monto ingresado y convertirlo a número

        if (isNaN(monto) || monto <= 0) {
            mensajeErrorIngresos.style.display = "block";
        } else {
            saldo += monto; // Agregar el monto al saldo actual
            const nuevaTransaccion = {
                concepto: "Dia de Pago",
                monto: monto,
                tipo: "ingreso"
            };
            transacciones.push(nuevaTransaccion);
            guardarSaldo(saldo);
            guardarMontoTotal(montoTotal);
            guardarTransacciones(transacciones);
            cIngresos.value = "";

        }
    });
}

//ordenar despues 
function formatearMonto(monto) {
    return monto.toFixed(2) + "$";
}

function cargarTransacciones() {
    const transaccionesGuardadas = localStorage.getItem("transacciones");
    if (transaccionesGuardadas) {
        return JSON.parse(transaccionesGuardadas);
    } else {
        return [];
    }
}

function guardarTransacciones(transacciones) {
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
}

function cargarSaldo() {
    const saldoGuardado = localStorage.getItem("saldo");
    if (saldoGuardado) {
        return parseFloat(saldoGuardado);
    } else {
        return 500; // Saldo inicial
    }
}

function guardarSaldo(saldo) {
    localStorage.setItem("saldo", saldo.toString());
}

function cargarMontoTotal() {
    const montoTotalGuardado = localStorage.getItem("montoTotal");
    if (montoTotalGuardado) {
        return parseFloat(montoTotalGuardado);
    } else {
        return 0;
    }
}

function guardarMontoTotal(montoTotal) {
    localStorage.setItem("montoTotal", montoTotal.toString());
}

//nose
const listaTransacciones = document.getElementById("lista-transacciones");
const montoTotalElemento = document.getElementById("monto-total-valor");

if (listaTransacciones) {
    // Cargar datos iniciales
    saldo = cargarSaldo();
    montoTotal = cargarMontoTotal();
    const transacciones = cargarTransacciones();

    function mostrarTransacciones() {
        listaTransacciones.innerHTML = "";
        transacciones.forEach(transaccion => {
            const transaccionElemento = document.createElement("div");
            transaccionElemento.classList.add("transaccion");

            const conceptoElemento = document.createElement("span");
            conceptoElemento.textContent = transaccion.concepto;
            transaccionElemento.appendChild(conceptoElemento);

            const montoElemento = document.createElement("span");
            montoElemento.textContent = formatearMonto(transaccion.monto);
            montoElemento.classList.add(transaccion.tipo === "ingreso" ? "ingreso" : "egreso");
            transaccionElemento.appendChild(montoElemento);
        });
        montoTotalElemento.textContent = formatearMonto(montoTotal);
    }

    // Mostrar las transacciones al cargar la página
    mostrarTransacciones();
}