let idade = Number(prompt("Qual a idade do atleta? "));
let peso = Number(prompt("Qual o peso do atleta: "));

if (idade<=12){
    alert("Categoria infantil!");
} else if(idade>12 && idade<=16 && peso<=40){
    alert("Categoria Juvenil leve!");
} else if(idade>12 && idade<=16 && peso>40){
    alert("Categoria Juvenil pesado!");
} else if(idade>=17 && idade<=24 && peso<=45){
    alert("Categoria Sênior leve!");
} else if(idade>=17 && idade<=24 && peso>45 && peso<=60){
    alert("Categoria Sênior médio!");
} else if(idade>=17 && idade<=24 && peso>60){
    alert("Categoria Sênior pesado!");
} else {
    alert("Categoria Veterano");
}