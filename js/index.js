window.onload = () => {
    var numberField = document.getElementById('numero_binario');
    var submitButton = document.getElementById('btn_convert');
    var resultArea = document.getElementById("result");
    submitButton.addEventListener('click', binaryToDecimal);

    function binaryToDecimal(evt) {
        evt.preventDefault();
        var binaryNumber = numberField.value.trim();
        var binaryRegEx = /\b[01]+\b/;
        
        if(binaryNumber == '') {
            Swal.fire({
                icon: 'error',
                title: 'Campo vacío',
                text: 'Debes de introducir un numero binario!'
            });
            resultArea.style.visibility = "hidden";
        }
        else if(!binaryRegEx.test(binaryNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Caracteres no validos',
                text: 'El valor introducido no es un numero binario'
            });
            resultArea.style.visibility = "hidden";
        } 
        else {
            getDecimalNumber(binaryNumber).then(response => {
                document.getElementById("result-value").innerText = binaryNumber + " => " + response; 
                resultArea.style.visibility = "visible";
            });
        }
    }
}