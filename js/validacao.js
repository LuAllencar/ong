export function validarCampo(campo) {

    const mensagem = campo.nextElementSibling;


    if (campo.checkValidity()) {

        campo.classList.remove("erro");
        campo.classList.add("sucesso");


        if (mensagem && mensagem.classList.contains("mensagem-erro")) {
            mensagem.remove();
        }


        return true;

    } else {

        campo.classList.remove("sucesso");
        campo.classList.add("erro");


        if (!mensagem || !mensagem.classList.contains("mensagem-erro")) {

            campo.insertAdjacentHTML(
                "afterend",
                '<small class="mensagem-erro">Preencha este campo corretamente.</small>'
            );

        }


        return false;
    }
}


export function validarSenhas() {

    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmar_senha");


    if (!senha || !confirmarSenha) {
        return true;
    }


    const mensagem = confirmarSenha.nextElementSibling;


    if (
        senha.value !== "" &&
        confirmarSenha.value !== "" &&
        senha.value !== confirmarSenha.value
    ) {

        confirmarSenha.classList.remove("sucesso");
        confirmarSenha.classList.add("erro");


        if (!mensagem || !mensagem.classList.contains("mensagem-erro")) {

            confirmarSenha.insertAdjacentHTML(
                "afterend",
                '<small class="mensagem-erro">As senhas não são iguais.</small>'
            );

        }

        return false;

    }


    if (mensagem && mensagem.classList.contains("mensagem-erro")) {
        mensagem.remove();
    }


    if (confirmarSenha.checkValidity()) {
        confirmarSenha.classList.remove("erro");
        confirmarSenha.classList.add("sucesso");
    }


    return true;
}