function getDecimalNumber(binaryNumber) {
    let result = null;
    const data = new FormData();
    data.append("binaryNumber", binaryNumber)
    return fetch('cores/binaryToDecimal.php', {
        method: 'POST',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.text();
        } else {
            throw "Error en la llamada Ajax";
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}