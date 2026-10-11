import { paginas } from "./paginas.js";

import {
    validarCampo,
    validarSenhas
} from "./validacao.js";

import {
    atualizarProgresso,
    salvarCadastro,
    carregarCadastro
} from "./cadastro.js";


const conteudo = document.getElementById("conteudo");


const cabecalho = document.querySelector("header");

const controlesTema = document.createElement("div");
controlesTema.className = "controles-tema";
controlesTema.setAttribute("aria-label", "Opções de aparência");

controlesTema.innerHTML = `
    <span>Escolha o tema:</span>

    <button type="button" data-tema="claro" aria-pressed="true">
        Claro
    </button>

    <button type="button" data-tema="escuro" aria-pressed="false">
        Escuro
    </button>

    <button type="button" data-tema="contraste" aria-pressed="false">
        Alto contraste
    </button>
`;

cabecalho.appendChild(controlesTema);

function aplicarTema(tema) {
    document.documentElement.setAttribute("data-tema", tema);

    localStorage.setItem("tema-eureca", tema);

    const botoes = controlesTema.querySelectorAll("button");

    botoes.forEach(function(botao) {
        botao.setAttribute(
            "aria-pressed",
            botao.dataset.tema === tema
        );
    });
}

controlesTema.addEventListener("click", function(event) {
    const botao = event.target.closest("button[data-tema]");

    if (botao) {
        aplicarTema(botao.dataset.tema);
    }
});

const temaSalvo = localStorage.getItem("tema-eureca");
const temasPermitidos = ["claro", "escuro", "contraste"];

if (temasPermitidos.includes(temaSalvo)) {
    aplicarTema(temaSalvo);
} else {
    aplicarTema("claro");
}


conteudo.addEventListener("click", function(event) {

    if (event.target.matches(".projeto a")) {

        if (!confirm("Você será direcionado para o cadastro. Continuar?")) {
            event.preventDefault();
        }
    }

});


function carregarPagina() {

    let pagina = location.hash.replace("#", "");


    if (pagina === "") {
        pagina = "inicio";
    }


    conteudo.innerHTML = paginas[pagina] || paginas.inicio;


    const formulario = document.querySelector("form");


    if (formulario) {

        carregarCadastro(formulario);


        formulario.addEventListener("input", function(event) {

            const campo = event.target;


            if (campo.matches("input, select")) {

                validarCampo(campo);

                validarSenhas();

                atualizarProgresso(formulario);

            }

        });


        formulario.addEventListener("submit", function(event) {

            event.preventDefault();


            let formularioValido = true;


            const campos = formulario.querySelectorAll(
                "input, select"
            );


            campos.forEach(function(campo) {

                if (!validarCampo(campo)) {
                    formularioValido = false;
                }

            });


            if (!validarSenhas()) {
                formularioValido = false;
            }


            atualizarProgresso(formulario);


            if (formularioValido) {

                salvarCadastro(formulario);

                alert("Cadastro realizado com sucesso!");

            } else {

                alert("Confira os campos preenchidos incorretamente.");

            }

        });


        atualizarProgresso(formulario);

    }

}


window.addEventListener("hashchange", carregarPagina);

carregarPagina();