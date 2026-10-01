        export function atualizarProgresso(formulario) {

    const preenchidos = formulario.querySelectorAll(
        "input:valid, select:valid"
    ).length;


    document.getElementById("progresso").textContent =
        "Campos preenchidos: " + preenchidos;
}


export function salvarCadastro(formulario) {

    const cadastro = {

        nome: formulario.nome.value,
        cpf: formulario.cpf.value,
        nascimento: formulario.nascimento.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        cidade: formulario.cidade.value,
        cep: formulario.cep.value,
        estado: formulario.estado.value,
        usuario: formulario.usuario.value

    };


    localStorage.setItem(
        "cadastroEureca",
        JSON.stringify(cadastro)
    );
}


export function carregarCadastro(formulario) {

    const dadosSalvos = localStorage.getItem("cadastroEureca");


    if (dadosSalvos) {

        const cadastro = JSON.parse(dadosSalvos);


        formulario.nome.value = cadastro.nome;
        formulario.cpf.value = cadastro.cpf;
        formulario.nascimento.value = cadastro.nascimento;
        formulario.email.value = cadastro.email;
        formulario.telefone.value = cadastro.telefone;
        formulario.cidade.value = cadastro.cidade;
        formulario.cep.value = cadastro.cep;
        formulario.estado.value = cadastro.estado;
        formulario.usuario.value = cadastro.usuario;

    }
}