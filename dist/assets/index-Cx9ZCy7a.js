(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{imagem:`img/Eureca_cursos.jpg`,titulo:`Cursos Gratuitos de Tecnologia`,categoria:`Tecnologia`,texto:`Disponibilizamos cursos online de programação, inteligência artificial, design, marketing digital e outras áreas para quem deseja aprender sem custo.`},{imagem:`img/Eureca_mentoria.jpg`,titulo:`Mentoria e Apoio aos Estudantes`,categoria:`Mentoria`,texto:`Voluntários compartilham conhecimento por meio de mentorias, plantões de dúvidas e acompanhamento do desenvolvimento dos alunos.`},{imagem:`img/Eureca_ebooks.jpg`,titulo:`Biblioteca Digital Livre`,categoria:`Biblioteca`,texto:`Reunimos apostilas, e-books, videoaulas e materiais educativos gratuitos, acessíveis em qualquer dispositivo e disponíveis para estudo online.`}];function t(){let t=``;return e.forEach(function(e){t+=`
            <article class="projeto">

                <img src="${e.imagem}" loading="lazy"
                    alt="Painel da plataforma Eureca.">

                <h3>${e.titulo}</h3>

                <span class="badge">${e.categoria}</span>

                <p>${e.texto}</p>

                <a href="#cadastro">Quero participar</a>

            </article>
        `}),t}var n={inicio:`

        <section id="sobre">

            <h2>Sobre a ONG Eureca</h2>

            <img id="eureca-aulas" src="img/Eureca_Aulas_Ficticio.jpg"
                alt="Painel da plataforma da ONG Eureca.">

            <p>
                A ONG Eureca tem como objetivo democratizar o acesso ao conhecimento por
                meio de uma plataforma gratuita, oferecendo oportunidades de aprendizagem
                para pessoas de diferentes idades e realidades.
            </p>

            <h3>Missão</h3>

            <p>
                Democratizar o acesso à educação e promover inclusão digital por meio de
                conteúdos gratuitos e colaborativos.
            </p>

            <h3>Visão</h3>

            <p>
                Ser referência nacional em educação comunitária digital, acessível e de
                qualidade.
            </p>

            <h3>Valores</h3>

            <ul>
                <li>Cultura Livre.</li>
                <li>Acessibilidade Digital.</li>
                <li>Conexão Humana.</li>
                <li>Protagonismo Digital.</li>
            </ul>

        </section>


        <section id="contato">

            <h2>Contato</h2>

            <p>
                Entre em contato para conhecer nossos projetos ou participar como voluntário.
            </p>

            <address>

                <p>
                    <strong>Endereço:</strong> Rua da Educação, 123 – Fernandópolis/SP.
                </p>

                <p>
                    <strong>Telefone:</strong>
                    <a href="tel:+5517999999999">(17)&nbsp;99999&#8209;9999</a>.
                </p>

                <p>
                    <strong>E-mail:</strong>
                    <a href="mailto:contato@eureca.org.br">contato@eureca.org.br</a>.
                </p>

            </address>

        </section>

    `,projetos:`

        <section id="projetos">

            <h2>Nossos Projetos</h2>

            <p>
                A Eureca acredita que a educação transforma vidas. Conheça nossas iniciativas
                gratuitas e descubra como participar da comunidade.
            </p>

            ${t()}

        </section>


        <section id="apoio">

            <h2>Apoie a Eureca</h2>

            <div class="alerta">
                Toda forma de apoio ajuda a levar conhecimento gratuito para mais pessoas.
            </div>

            <p>
                Você pode contribuir realizando uma doação financeira, tornando-se um voluntário
                ou compartilhando nossos cursos para que mais pessoas tenham acesso à educação.
            </p>

            <a href="#cadastro">Quero apoiar este projeto</a>

        </section>


        <div class="toast">
            Conheça nossos projetos gratuitos!
        </div>

    `,cadastro:`

        <section id="cadastro">

            <h2>Cadastre-se</h2>

            <span class="badge">Cadastro - Aluno e Voluntário</span>

            <p>
                Preencha o formulário abaixo para se cadastrar na Eureca.
            </p>

            <div class="alerta">
                Preencha todos os campos obrigatórios antes de enviar o cadastro.
            </div>


            <form action="processar_cadastro.php" method="post">


                <fieldset>

                    <legend>Informações Pessoais</legend>

                    <label for="nome">Nome completo:</label>

                    <input type="text" id="nome" name="nome" required
                        autocomplete="name"
                        placeholder="Digite seu nome completo">


                    <label for="cpf">CPF:</label>

                    <input type="text" id="cpf" name="cpf" required
                        autocomplete="off"
                        inputmode="numeric"
                        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                        title="Digite o CPF no formato 000.000.000-00"
                        placeholder="000.000.000-00">


                    <label for="nascimento">Data de nascimento:</label>

                    <input type="date" id="nascimento" name="nascimento"
                        required
                        autocomplete="bday">

                </fieldset>


                <fieldset>

                    <legend>Informações de Contato</legend>

                    <label for="email">E-mail:</label>

                    <input type="email" id="email" name="email" required
                        autocomplete="email"
                        placeholder="Digite seu e-mail">


                    <label for="telefone">Telefone:</label>

                    <input type="tel" id="telefone" name="telefone" required
                        autocomplete="tel"
                        inputmode="tel"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        title="Digite o telefone no formato (00) 00000-0000"
                        placeholder="(00) 00000-0000">


                    <label for="cidade">Cidade:</label>

                    <input type="text" id="cidade" name="cidade" required
                        autocomplete="address-level2"
                        placeholder="Digite o nome da sua cidade">


                    <label for="cep">CEP:</label>

                    <input type="text" id="cep" name="cep" required
                        autocomplete="postal-code"
                        inputmode="numeric"
                        pattern="[0-9]{5}-[0-9]{3}"
                        title="Digite o CEP no formato 00000-000"
                        placeholder="00000-000">


                    <label for="estado">Estado:</label>

                    <select id="estado" name="estado" required
                        autocomplete="address-level1">

                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="MG">Minas Gerais</option>

                    </select>

                </fieldset>


                <fieldset>

                    <legend>Informações de Acesso</legend>

                    <label for="usuario">Usuário:</label>

                    <input type="text" id="usuario" name="usuario" required
                        autocomplete="username"
                        placeholder="Digite seu usuário">


                    <label for="senha">Senha:</label>

                    <input type="password" id="senha" name="senha" required
                        autocomplete="new-password"
                        placeholder="Digite sua senha">


                    <label for="confirmar_senha">Confirmar senha:</label>

                    <input type="password" id="confirmar_senha"
                        name="confirmar_senha"
                        required
                        autocomplete="new-password"
                        placeholder="Confirme sua senha">

                </fieldset>


                <p id="progresso">Campos preenchidos: 0</p>


                <button type="submit">Cadastrar</button>


                <div class="toast">
                    Confira seus dados antes de cadastrar.
                </div>

            </form>

        </section>

    `};function r(e){let t=e.nextElementSibling;return e.checkValidity()?(e.classList.remove(`erro`),e.classList.add(`sucesso`),t&&t.classList.contains(`mensagem-erro`)&&t.remove(),!0):(e.classList.remove(`sucesso`),e.classList.add(`erro`),(!t||!t.classList.contains(`mensagem-erro`))&&e.insertAdjacentHTML(`afterend`,`<small class="mensagem-erro">Preencha este campo corretamente.</small>`),!1)}function i(){let e=document.getElementById(`senha`),t=document.getElementById(`confirmar_senha`);if(!e||!t)return!0;let n=t.nextElementSibling;return e.value!==``&&t.value!==``&&e.value!==t.value?(t.classList.remove(`sucesso`),t.classList.add(`erro`),(!n||!n.classList.contains(`mensagem-erro`))&&t.insertAdjacentHTML(`afterend`,`<small class="mensagem-erro">As senhas não são iguais.</small>`),!1):(n&&n.classList.contains(`mensagem-erro`)&&n.remove(),t.checkValidity()&&(t.classList.remove(`erro`),t.classList.add(`sucesso`)),!0)}function a(e){let t=e.querySelectorAll(`input:valid, select:valid`).length;document.getElementById(`progresso`).textContent=`Campos preenchidos: `+t}function o(e){let t={nome:e.nome.value,cpf:e.cpf.value,nascimento:e.nascimento.value,email:e.email.value,telefone:e.telefone.value,cidade:e.cidade.value,cep:e.cep.value,estado:e.estado.value,usuario:e.usuario.value};localStorage.setItem(`cadastroEureca`,JSON.stringify(t))}function s(e){let t=localStorage.getItem(`cadastroEureca`);if(t){let n=JSON.parse(t);e.nome.value=n.nome,e.cpf.value=n.cpf,e.nascimento.value=n.nascimento,e.email.value=n.email,e.telefone.value=n.telefone,e.cidade.value=n.cidade,e.cep.value=n.cep,e.estado.value=n.estado,e.usuario.value=n.usuario}}var c=document.getElementById(`conteudo`);c.addEventListener(`click`,function(e){e.target.matches(`.projeto a`)&&(confirm(`Você será direcionado para o cadastro. Continuar?`)||e.preventDefault())});function l(){let e=location.hash.replace(`#`,``);e===``&&(e=`inicio`),c.innerHTML=n[e]||n.inicio;let t=document.querySelector(`form`);t&&(s(t),t.addEventListener(`input`,function(e){let n=e.target;n.matches(`input, select`)&&(r(n),i(),a(t))}),t.addEventListener(`submit`,function(e){e.preventDefault();let n=!0;t.querySelectorAll(`input, select`).forEach(function(e){r(e)||(n=!1)}),i()||(n=!1),a(t),n?(o(t),alert(`Cadastro realizado com sucesso!`)):alert(`Confira os campos preenchidos incorretamente.`)}),a(t))}window.addEventListener(`hashchange`,l),l();