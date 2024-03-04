
// Función para mostrar u ocultar la imagen de fondo del textarea
function hiddenBackgroundImage() {
    let textarea = document.getElementById('output-textarea');

    if (textarea.value.trim() === '') {
        textarea.style.backgroundImage = "url('img/textNotFound.png')"; // Muestra la imagen de fondo
    } else {
        textarea.style.backgroundImage = 'none'; // Oculta la imagen de fondo
    }
}
hiddenBackgroundImage();
document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage);

function applyTextareaAnimation(textareaAnimation) {
    textareaAnimation.addEventListener('click', function () {
        textareaAnimation.classList.add('shake'); // Agrega la clase 'shake' al hacer clic en el textarea
        setTimeout(function () { textareaAnimation.classList.remove('shake'); }, 500); // 500 milisegundos (0.5 segundos)
    });
}

let inputTexarea = document.getElementById('input-textarea');
let outputTexarea = document.getElementById('output-textarea');
applyTextareaAnimation(inputTexarea);
applyTextareaAnimation(outputTexarea);

document.addEventListener('DOMContentLoaded', function () {
    let errorMessage = document.getElementById('error-message');

    // Agregamos el evento de escucha al textarea
    document.getElementById('input-textarea').addEventListener('input', function () {
        let inputText = this.value;
        let regex = /^[a-z\s]*$/; // Expresión regular para letras minúsculas y espacios en blanco

        if (!regex.test(inputText)) {
            errorMessage.style.display = 'inline-flex';
            document.getElementById('encriptar').setAttribute('disabled', 'true');
            document.getElementById('desencriptar').setAttribute('disabled', 'true');


        } else {
            errorMessage.style.display = 'none';
            document.getElementById('encriptar').removeAttribute('disabled');
            document.getElementById('desencriptar').removeAttribute('disabled');

        }
    });
});

function encryptText() {
    let text = document.getElementById('input-textarea').value;
    let textConverted = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if(text.length != 0){
        document.getElementById('output-textarea').value = textConverted;
    }

  document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage());
}

function decryptText() {
    let text = document.getElementById('input-textarea').value;
    let textConverted = text
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if(text.length != 0){
        document.getElementById('output-textarea').value = textConverted;
    }

  document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage());
}













