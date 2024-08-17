const inputTextArea = document.getElementById('texto-entrada');
const outputTextArea = document.querySelector('.texto-resultado');
const encryptButton = document.querySelector('.criptografar');
const decryptButton = document.querySelector('.descriptografar');
const copyButton = document.querySelector('.copiar');

// CRIPTOGRAFAR //
function encryptText() {
    let inputText = inputTextArea.value;

    if (/[^a-z\s]/.test(inputText)) {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    inputTextArea.value = "";
    outputTextArea.value = encryptedText;
}

// DESCRIPTOGRAFAR //
function decryptText() {
    let inputText = inputTextArea.value;
    
    if (/enter|imes|ai|ober|ufat/.test(inputText)) {
        let decryptedText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputTextArea.value = "";
        inputTextArea.value = decryptedText;
    } else {

        let outputText = outputTextArea.value;
        
        let decryptedText = outputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputTextArea.value = "";
        inputTextArea.value = decryptedText;
    }
}

// COPIAR O RESULTADO //
function copyText() {
    const originalText = copyButton.textContent;

    if (outputTextArea.value.trim() === "") {
        copyButton.textContent = "Nada para copiar!";
        setTimeout(() => {
            copyButton.textContent = originalText; 
        }, 2000);
        return; 
    }

    navigator.clipboard.writeText(outputTextArea.value)
        .then(() => {
            copyButton.textContent = "Texto Copiado!";
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
            copyButton.textContent = "Falha ao copiar";
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        });
}

encryptButton.addEventListener("click", encryptText);
decryptButton.addEventListener("click", decryptText);
copyButton.addEventListener("click", copyText);
