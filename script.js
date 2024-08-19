let BotaoSubmeter = document.getElementById("botao");

BotaoSubmeter.addEventListener("click", submeter);

function submeter() {
    
    let elementoNome = document.getElementById ("nome-input").value; 
    let elementoIdade = document.getElementById ("idade-input").value;
    let elementoEmail = document.getElementById ("email-input").value;
    let elementoCpf = document.getElementById ("cpf-input").value;
   console.log(elementoNome);
   console.log(elementoIdade);
   console.log(elementoCpf);
   console.log(elementoEmail);

  
   console.log(valideEmail(elementoEmail));
}

function valideEmail(email) {
    return /^[/w]+@[/w]+.[a-zA-Z]/.test(email)


    
}