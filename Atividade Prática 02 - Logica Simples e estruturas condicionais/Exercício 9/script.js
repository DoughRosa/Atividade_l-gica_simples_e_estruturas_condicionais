let velocidade = Number(prompt("Digite a velocidade do veículo em Km/h: "));
let limite = 80;
let multa = (velocidade-limite)*5;

if(velocidade>limite){
    alert(`Veículo multado! O valor da multa é de R$ ${multa}!`)
} else {
    alert (`Veículo dentro do limite de velocidade!`)
}