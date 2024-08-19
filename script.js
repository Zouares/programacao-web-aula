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
   if (valideEmail(elementoEmail)) {
       alert("Email válido!");
    } else {
        alert("Email inválido. Por favor, insira um email válido.");
    }
    
    console.log(valideCpf(elementoCpf));
    if (valideCpf(elementoCpf)) {
        alert("CPF válido!");
    } else {
        alert("CPF inválido. Por favor, insira um CPF válido.");
    }
}


function valideEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}





function valideCpf(cpf) {

    const pattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return pattern.test(cpf);
}
