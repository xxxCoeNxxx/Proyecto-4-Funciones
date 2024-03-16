let contadorTurno: number = 0;

mostrarContador();

// Función para incrementar el contador y mostrarlo en pantalla
function aumentarContador(): void {
    contadorTurno++;
    if (contadorTurno > 99) {
        contadorTurno = 0;
    }
    mostrarContador();
}

// Función para disminuir el contador y mostrarlo
function disminuirContador(): void {
    contadorTurno--;
    if (contadorTurno < 0) {
        contadorTurno = 99;
    }
    mostrarContador();
}

// Función para mostrar el contador en pantalla
function mostrarContador(): void {
    const contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        contadorElemento.textContent = contadorTurno.toString().padStart(2, '0');
    }
}

// Botón de Reset
const reset = (): void => {contadorTurno = 0; mostrarContador();}

const botonReset: HTMLElement | null = document.getElementById("reset");
if (botonReset) {
    botonReset.addEventListener("click", reset)
}

// Asocio la función aumentarContador al evento click del botón
const botonAumentar: HTMLElement | null = document.getElementById("botonSiguiente");
if (botonAumentar instanceof HTMLButtonElement) {
    botonAumentar.addEventListener("click", aumentarContador);
}

// Asocio la función disminuirContador al evento click del botón
const botonDisminuir: HTMLElement | null = document.getElementById("botonAnterior");
if (botonDisminuir instanceof HTMLButtonElement) {
    botonDisminuir.addEventListener("click", disminuirContador);
}

// Asocio el valor introducido al botón Buscar
const buscar = (): void => {
    const barraBuscar : HTMLInputElement | null = document.getElementById("barraBuscar") as HTMLInputElement;
        const numeroIntroducido: number = parseInt(barraBuscar.value); 
        if (!isNaN(numeroIntroducido) && numeroIntroducido >=0 && numeroIntroducido <100) {
            contadorTurno = numeroIntroducido;
            mostrarContador();
        }
}

const botonBuscar: HTMLElement | null = document.getElementById("botonBuscar");
if (botonBuscar) {
    botonBuscar.addEventListener("click", buscar);
}
