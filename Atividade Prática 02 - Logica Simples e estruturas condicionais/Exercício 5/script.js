let altura = Number(prompt("Digite sua Altura: "));
let peso = Number(prompt("Digite seu Peso: "));
let imc = Number(peso/(altura*altura));

if(imc<18.5) {
    document.write("Você está abaixo da faixa de peso ideal.")
} else if(imc>24.99) {
    document.write("Você está acima da faixa de peso ideal.")
} else {
    document.write("Você está dentro da faixa de peso ideal.")
}

