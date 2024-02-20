let contadorTurno: number = 0;

mostrarContador();

// Función para incrementar el contador y mostrarlo en pantalla
function aumentarContador() {
    contadorTurno++;
    if (contadorTurno > 99) {
        contadorTurno = 0;
    }
    mostrarContador();
}

// Función para disminuir el contador y mostrarlo
function disminuirContador() {
    contadorTurno--;
    if (contadorTurno < 0) {
        contadorTurno = 99;
    }
    mostrarContador();
}

// Función para mostrar el contador en pantalla
function mostrarContador() {
    const contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        contadorElemento.textContent = contadorTurno.toString().padStart(2, '0');
    }
}

//  
const botonReset = document.getElementById("reset");
if (botonReset) {
    botonReset.addEventListener("click", function() {
        contadorTurno = 0;
        mostrarContador();
    })
}

// Asocio la función aumentarContador al evento click del botón
const botonAumentar = document.getElementById("botonSiguiente");
if (botonAumentar) {
    botonAumentar.addEventListener("click", aumentarContador);
}

// Asocio la función disminuirContador al evento click del botón
const botonDisminuir = document.getElementById("botonAnterior");
if (botonDisminuir) {
    botonDisminuir.addEventListener("click", disminuirContador);
}

// Asocio el valor introducido al botón Buscar
const botonBuscar = document.getElementById("botonBuscar");
    if (botonBuscar) {
        botonBuscar.addEventListener("click", buscar)
    }


