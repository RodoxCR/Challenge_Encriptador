
// Function to show or hide the background image of the text area
function hiddenBackgroundImage() {
    let textarea = document.getElementById('output-textarea');

    if (textarea.value.trim() === '') {
        textarea.style.backgroundImage = "url('img/textNotFound.png')"; // Shows the background image
    } else {
        textarea.style.backgroundImage = 'none'; // Hide the background image
    }
}
hiddenBackgroundImage();
document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage);

function applyTextareaAnimation(textareaAnimation) {
    textareaAnimation.addEventListener('click', function () {
        textareaAnimation.classList.add('shake'); // Add the 'shake' class when clicking the textarea
        setTimeout(function () { textareaAnimation.classList.remove('shake'); }, 500); // 500 milliseconds (0.5 seconds)
    });
}

let inputTexarea = document.getElementById('input-textarea');
let outputTexarea = document.getElementById('output-textarea');
applyTextareaAnimation(inputTexarea);
applyTextareaAnimation(outputTexarea);

document.addEventListener('DOMContentLoaded', function () {
    let errorMessage = document.getElementById('error-message');

    //Add listening event to textarea
    document.getElementById('input-textarea').addEventListener('input', function () {
        let inputText = this.value;
        let regex = /^[a-z\s]*$/; // Regular expression for lowercase letters and spaces
        let encryptButton = document.getElementById('encrypt');
        let decryptButton = document.getElementById('decrypt');

        if (!regex.test(inputText)) {

            errorMessage.style.display = 'inline-flex';
            document.getElementById('encrypt-button').setAttribute('disabled', 'true');
            document.getElementById('decrypt-button').setAttribute('disabled', 'true');
            

        } else {
            errorMessage.style.display = 'none';
            document.getElementById('encrypt-button').removeAttribute('disabled');
            document.getElementById('decrypt-button').removeAttribute('disabled');

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

    if (text.length != 0) {
        document.getElementById('output-textarea').value = textConverted;
    }

    document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage());
}

function decryptText() {
    let text = document.getElementById('input-textarea').value;
    let textConverted = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (text.length != 0) {
        document.getElementById('output-textarea').value = textConverted;
    }

    document.getElementById('output-textarea').addEventListener('input', hiddenBackgroundImage());
}

function copy() {
    
    let textarea = document.getElementById('output-textarea');
    textarea.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    let message = document.getElementById('successful-copy-message');
    message.textContent = '¡El texto se ha copiado con éxito!';
    message.style.display = 'block';

    // Hide the message after a few seconds
    setTimeout(function() {
        message.style.display = 'none';
    }, 3000); // 3000 milliseconds equals 3 seconds.
}


















