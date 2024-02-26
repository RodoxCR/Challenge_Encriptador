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


function applyTextareaAnimation(textareaAnimation) {
    textareaAnimation.addEventListener('click', function () {
        textareaAnimation.classList.add('shake'); // Agrega la clase 'shake' al hacer clic en el textarea

        // Remueve la clase 'shake' después de 0.5 segundos para que la animación se detenga y el textarea vuelva a su estado original
        setTimeout(function () {
            textareaAnimation.classList.remove('shake');
        }, 500); // 500 milisegundos (0.5 segundos)
    });
}

let inputTexarea = document.getElementById('input_textarea');
let outputTexarea = document.getElementById('output_textarea');
applyTextareaAnimation(inputTexarea);
applyTextareaAnimation(outputTexarea);


