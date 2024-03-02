
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

document.addEventListener('DOMContentLoaded', function () {
    let errorMessage = document.getElementById('error_message');

    // Agregamos el evento de escucha al textarea
    document.getElementById('input_textarea').addEventListener('input', function () {
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

function encripytorText(text) {

    let textareaContent = document.getElementById('input_textarea');

    if (textareaContent.value === undefined || textareaContent.value === null) {
        // Si es así, asignar una cadena vacía a texto
        text = '';

    } else {
        // Si no, asignar el valor de textarea.value a texto
        text = textareaContent.value;
    }


    // Objeto con los valores de reemplazo para las vocales
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };

    // Separar la cadena en caracteres incluyendo los espacios
    let characters = text.split('');

    // Iterar sobre cada caracter
    for (let i = 0; i < characters.length; i++) {
        // Verificar si el caracter es una vocal
        if ('aeiou'.includes(characters[i])) {
            // Reemplazar la vocal por el valor correspondiente en el objeto de reemplazos
            characters[i] = replacements[characters[i]] || characters[i];
        }
    }

    // Unir los caracteres en una cadena nuevamente
    let encryptorMessage = characters.join('');

    // Devolver la cadena transformada
    return encryptorMessage;
}

document.getElementById('encriptar').addEventListener('click', function () {
    // Llamar a la función transformText cuando se haga clic en el botón
    let textoTransformado = encripytorText();
    console.log(textoTransformado); // Resultado: H1l2 m3nd4
});



