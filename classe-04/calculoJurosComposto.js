// Código para calcular os juros compostos
// Programação do Zero Cubos Academy e Ifood

let montante = 0, capital = 1000, taxa = 12.5, tempo = 5;

montante = capital * (Math.pow((1 + (taxa / 100)), tempo));

console.log(montante);