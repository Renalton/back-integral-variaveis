//Código para calcular a taxa de juros
//Programação do Zero Cubos Academy e Ifood

let juros = 0, montante = 90000, capital = 60000, nPeriodo = 24;

juros = Math.pow(montante / capital, 1 / nPeriodo) - 1;
console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${juros}, pois após ${nPeriodo} meses você teve que pagar ${montante}`);