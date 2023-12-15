let xNumero = Number(prompt("Digite o primeiro número: "));
let yNumero = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação que deseja realizar: (utilize * / + -) ");
let resultado = 0;

if(operacao === '*'){
    resultado = xNumero*yNumero
    document.write(resultado)
} else if(operacao === '/'){
    resultado = xNumero/yNumero
    document.write(resultado)
} else if(operacao === '+'){
    resultado = xNumero+yNumero
    document.write(resultado)
} else if(operacao === '-'){
    resultado = xNumero-yNumero
    document.write(resultado)
} else {
    document.write("Operação inválida.")
}