alert('Bem vindo ao jogo do número secreto');
let numeroMaximo;
numeroMaximo = prompt('Escolha o número máximo da brincadeira.')
let numeroSecreto = parseInt(Math.random() * 10 + 1); // Math.random (dá um numero entre 0 e 1(exclusive). E o parseInt dá só aparte inteira desse número. *10 para que seja um numero maior que 0.)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//while = enquanto => chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        alert('Não foi dessa vez! Tente novamente.');
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;        
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você acertou o número secreto: "${numeroSecreto}", com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//   alert(`Isso ai! Você acertou o número secreto: "${numeroSecreto}", com ${tentativas} tentativas.`); // para acrescentar uma variável dentro da frase, troca aspas simples por crase
//} else {
//    alert(`Isso ai! Você acertou o número secreto: "${numeroSecreto}", com ${tentativas} tentativa.`); 
//}
