
// Función para mostrar u ocultar la imagen de fondo del textarea
function hidenBackgroundImage() {
    let textarea = document.getElementById('output_textarea');

    if (textarea.value.trim() === '') {
        textarea.style.backgroundImage = "url('img/textNotFound.png')"; // Muestra la imagen de fondo
    } else {
        textarea.style.backgroundImage = 'none'; // Oculta la imagen de fondo
    }
}
hidenBackgroundImage();
document.getElementById('output_textarea').addEventListener('input', hidenBackgroundImage);

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
    let texto = document.getElementById("input_textarea").value;
    let regex = /^[a-z]+$/; // Expresión regular para letras minúsculas sin acento
    if (!regex.test(texto)) {
        alert("El mensaje debe contener letras minúsculas, sin caracteres especiales y sin acento.");
        return;
    }
}



