let textarea = document.getElementById('output_textarea');

// Función para mostrar u ocultar la imagen de fondo del textarea
function hidenBackgroundImage() {
    if ((textarea.value.trim() === '') || (textarea.value.trim() === 'Ningún mensaje de texto a sido encriptado o desencriptado')) {
        textarea.style.backgroundImage = "url('img/textNotFound.png')"; // Muestra la imagen de fondo
    } else {
        textarea.style.backgroundImage = 'none'; // Oculta la imagen de fondo
    }
}

// Mostrar la imagen de fondo al cargar la página (si el textarea está vacío)
hidenBackgroundImage();

// Escuchar el evento input para mostrar u ocultar la imagen de fondo
textarea.addEventListener('input', hidenBackgroundImage);
