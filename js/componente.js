/**
 * Componente Visual: Toast Notification
 * Crea y muestra notificaciones dinámicas en pantalla.
 * 
 * @param {string} mensaje - El texto a mostrar en la notificación.
 * @param {string} tipo - 'success', 'error', 'info', o 'warning'.
 * @param {number} duracion - Tiempo en milisegundos antes de desaparecer (default 3000).
 */
function mostrarToast(mensaje, tipo = 'info', duracion = 3000) {
    // 1. Verificar si ya existe el contenedor principal, si no, crearlo.
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        document.body.appendChild(contenedor);
    }

    // 2. Crear el elemento visual (El Toast)
    const toast = document.createElement('div');
    // Le asignamos la clase base y la clase dinámica del color
    toast.className = `toast-notificacion toast-${tipo}`;
    toast.textContent = mensaje;

    // 3. Agregar comportamiento: cerrar al hacer clic
    toast.addEventListener('click', () => {
        cerrarToast(toast);
    });

    // 4. Insertar el Toast en el documento
    contenedor.appendChild(toast);

    // 5. Animación de entrada (pequeño retraso para que el CSS aplique la transición)
    setTimeout(() => {
        toast.classList.add('mostrar');
    }, 10);

    // 6. Comportamiento de tiempo: ocultar automáticamente
    setTimeout(() => {
        cerrarToast(toast);
    }, duracion);
}

/**
 * Función auxiliar para animar la salida y eliminar el elemento del DOM
 */
function cerrarToast(toastElement) {
    if (toastElement.classList.contains('mostrar')) {
        toastElement.classList.remove('mostrar'); // Inicia animación de salida
        // Espera a que termine la animación de CSS (300ms) para borrarlo de memoria
        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
            }
        }, 300);
    }
}