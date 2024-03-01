
// Función para mostrar u ocultar la imagen de fondo del textarea
function hiddenBackgroundImage() {
    let textarea = document.getElementById('output_textarea');

    if (textarea.value.trim() === '') {
        textarea.style.backgroundImage = "url('img/textNotFound.png')"; // Muestra la imagen de fondo
    } else {
        textarea.style.backgroundImage = 'none'; // Oculta la imagen de fondo
    }
}
hiddenBackgroundImage();
document.getElementById('output_textarea').addEventListener('input', hiddenBackgroundImage);

function applyTextareaAnimation(textareaAnimation) {
    textareaAnimation.addEventListener('click', function () {
        textareaAnimation.classList.add('shake'); // Agrega la clase 'shake' al hacer clic en el textarea
        setTimeout(function () { textareaAnimation.classList.remove('shake'); }, 500); // 500 milisegundos (0.5 segundos)
    });
}

let inputTexarea = document.getElementById('input_textarea');
let outputTexarea = document.getElementById('output_textarea');
applyTextareaAnimation(inputTexarea);
applyTextareaAnimation(outputTexarea);

function validateText() {
    let texto = document.getElementById('input_textarea').value;
    let regex = /^[a-z\s]*$/;
    let errorMessage = document.getElementById('error_message');
    if (!regex.test(texto)) {
        errorMessage.style.display = 'inline-flex';
        return;
    }
}


