var btnAdicionar = document.getElementById("btnAdicionar");
var main = document.querySelector(".conteudo");
var i = 0;

btnAdicionar.addEventListener("click", function criarTarefa(evt) {

    evt.preventDefault();

    var tarefa = document.getElementById("inputTarefa");
    var pessoa = document.getElementById("inputPessoa");
    var prioridade = document.getElementById("inputPrioridade");
    var descricao = document.getElementById("inputDescricao");

    var valorPessoa = pessoa.value;
    var valorDescricao = descricao.value;
    var valorTarefa = tarefa.value;
    var valorPrioridade = prioridade.value;


    var conteudoPessoa = `<p class="conteudoTarefas">PESSOA: ${valorPessoa}</p>`;
    var conteudoDescricao = `<p class="conteudoTarefas">DESCRIÇÃO: ${valorDescricao}</p>`;
    var conteudoTarefa =  `<p class="conteudoTarefas">TAREFA: ${valorTarefa}</p>`;
    var conteudoPrioridade = `<p class="conteudoTarefas">PRIORIDADE: ${valorPrioridade}</p>`;



    var tarefasSeccao = document.getElementById("tarefasSeccao");



    var botaoDeletar = document.createElement("button");

    botaoDeletar.addEventListener("click", (evento) => {
        const botaoDeleta = evento.target;
    
        const tarefaCompleta = botaoDeleta.parentElement;

        tarefaCompleta.remove()

        return botaoDeleta

    })

 

    var elementoUl = document.createElement("ul");
    elementoUl.classList.add("ulPrincipal")

    var elementoPessoa = document.createElement("li");
    elementoPessoa.innerHTML = conteudoPessoa;

    var elementoTarefa = document.createElement("li");
    elementoTarefa.innerHTML = conteudoTarefa;

    var elementoPrioridade = document.createElement("li");
    elementoPrioridade.innerHTML = conteudoPrioridade;

    var elementoDescricao = document.createElement("li");
    elementoDescricao.innerHTML = conteudoDescricao;

    var linkTarefas = document.createElement("a");
    linkTarefas.classList.add("linkTarefas")
    linkTarefas.innerText = "TAREFAS";
    linkTarefas.setAttribute("href", "#tarefasSeccao");

    var labelEstado = document.createElement("label")
    var estado = document.createElement("select");
    var estadoPendente = document.createElement("option");
    var estadoAndamento = document.createElement("option");
    var estadoConcluido = document.createElement("option");
    labelEstado.innerText = "ESTADO: ";
    estadoPendente.innerText = "Pendente";
    estadoAndamento.innerText = "Em andamento";
    estadoConcluido.innerText = "Concluido";
    labelEstado.classList.add("conteudoTarefas");
    estado.classList.add("selectTarefa");

    tarefasSeccao.classList.add("tarefas");
    botaoDeletar.classList.add("botaoDeletar")
    botaoDeletar.innerText = "EXCLUIR";

    elementoUl.appendChild(labelEstado);
    labelEstado.appendChild(estado);
    estado.appendChild(estadoPendente);
    estado.appendChild(estadoAndamento);
    estado.appendChild(estadoConcluido);

    main.appendChild(linkTarefas);
    tarefasSeccao.appendChild(elementoUl);
    elementoUl.appendChild(botaoDeletar);
    elementoUl.appendChild(elementoTarefa);
    elementoUl.appendChild(elementoPessoa);
    elementoUl.appendChild(elementoPrioridade);
    elementoUl.appendChild(elementoDescricao);

    tarefa.value = " ";
    pessoa.value = " ";
    descricao.value = " ";

}
)