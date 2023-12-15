let totalConta = 5000.00;
let saque = parseFloat(prompt(`Você possui R$ ${totalConta} de saldo. Quanto você quer sacar?`));
let taxaEsaque = saque + 4.50;

if(saque%5 !== 0){
    alert("Operação Inválida, seu saque deve ser múltiplo de 5!")
} else if(taxaEsaque<=totalConta) {
    totalConta -= taxaEsaque;
    alert(`Seu saldo atual é de R$ ${totalConta}.`);
    } else {
        alert("Você não tem dinheiro suficiente para essa opeção!")
        } 

