var navBtn = document.querySelector(".nav-btn");
var navAnexar = document.querySelector(".formTarefas-anexar");
var input = document.getElementById("adicionarPessoa-input");
var divPessoas = document.querySelector(".navPessoas");

navBtn.addEventListener("click", function adicionarPessoa(evt) {
    evt.preventDefault()
    navAnexar.classList.toggle("formTarefas-anexar--open");
    navBtn.classList.toggle("confirmarNav-btn--open")

    var valorInput = input.value;
    var conteudoInput = `<p>${valorInput}</p>`;

    var elementoUlNav = document.createElement("ul");

    var elementoPessoa = document.createElement("li");
    elementoPessoa.innerHTML = conteudoInput;

    divPessoas.appendChild(elementoUlNav);
    elementoUlNav.appendChild(elementoPessoa);

    input.value = " "




})