let peso = Number(prompt("Digite aqui seu peso:"));
let altura = Number(prompt("Digite aqui sua altura"));
let IMC = peso / (altura * altura);

if (IMC < 17) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: Você está muito abaixo do peso!`);
} else if (IMC >= 17 && IMC <= 18.49) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: Você está abaixo do peso!`);
} else if (IMC >= 18.5 && IMC <= 24.99) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: Peso normal!`);
} else if (IMC >= 25 && IMC <= 29.99) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: Você está acima do peso!`);
} else if (IMC >= 30 && IMC <= 34.99) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: OBESIDADE I`);
} else if (IMC >= 35 && IMC <= 39.99) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: OBESIDADE II(Severa)`);
} else if (IMC >= 40) {
    alert(`Seu IMC é de ${IMC}. Diagnóstico: OBESIDADE III(Mórbida)`)
} else {
    alert("ERRO. TENTE NOVAMENTE!");
}

