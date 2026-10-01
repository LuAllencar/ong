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