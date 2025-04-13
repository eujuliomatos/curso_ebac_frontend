const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
let formEValido = false;

function validaCampo(campoA, campoB) {
    if (isNaN(campoA) || isNaN(campoB)) {
        return false;
    }
    return campoA < campoB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemSucesso = `O formulário foi <b>enviado</b> com sucesso`;

    formEValido = validaCampo(campoA, campoB);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';
    
    } else {
        document.getElementById('campoB').style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } 
});

campoA.addEventListener('keyup', function(e) {
    const valorA = parseFloat(e.target.value);
    const valorB = parseFloat(document.getElementById('campoB').value);

    formEValido = validaCampo(campoA, campoB);
});
