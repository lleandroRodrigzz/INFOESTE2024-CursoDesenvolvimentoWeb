//Encontrar o elemento
//Definir o Evento
//A funcao

let usuarios = [];
let vagas = 27;

const vagasRestantes = window.document.getElementById('vagasRestantes');
const botao = window.document.getElementById('btInscricao');
const btnFechar = window.document.getElementById('fechaForm');
const btnEnvInscricao = window.document.getElementById('envInscricao');

botao.addEventListener('click',mostraForm);
btnFechar.addEventListener('click',fechaForm);
btnEnvInscricao.addEventListener('click',enviarInscricao);
atualizaVagas();

function mostraForm(){
    //console.log("Clicou no Botão de inscrever-se");
    if(vagas > 0){
        const form = window.document.getElementById('popup-bg');
        form.classList.add('mostraForm');
    }
    else{
        alert("Não há mais vagas disponivéis!");
    }
    
}

function fechaForm(){
    //console.log("Clicou no Botão de fechar formulario!");
    const form = window.document.getElementById('popup-bg');
    form.classList.remove('mostraForm');
}

function atualizaVagas(){   //atualiza o estado da vagas no HTML
    vagasRestantes.innerHTML = vagas;
}

function enviarInscricao(){
    event.preventDefault();
    //pegar valores dos inputs
    const inputText = window.document.getElementById('input-text');
    /*debugger*/
    const inputEmail = window.document.getElementById('input-email');

    if(inputEmail.value !== "" && inputText.valeu !== ""){//pode cadastrar
        usuarios.push({ nome: inputText.value, email: inputEmail.value });
        console.log(usuarios);
        vagas--;
        atualizaVagas();
        fechaForm();
        inputText.value = "";
        inputEmail.value = "";
    }
    else{   //nao pode
        window.alert("Por favor, preencher campos corretamente!");
    }
}