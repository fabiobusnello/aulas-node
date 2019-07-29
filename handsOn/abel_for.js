// APRENDENDO A ESTRUTURA FOR

// LAÇO DE REPETIÇÃO USANDO O WHILE

let contador = 1 // DECLARAÇÃO DE UMA VARIÁVEL
while (contador <= 10) { // EXPRESSÃO PARA DIZER SE CONTINUA OU NÃO O LAÇO
    console.log(`contador = ${contador}`)
    contador++ // ISSO É UM INCREMENTO
}

// ESSES 03 ELEMENTOS (DELARAÇÃO DE VARIAVEL / EXPRESSÃO / INCREMENTO) FAZEM PARTE DO LAÇO FOR

// ESSA É A OUTRA FORMA DE FAZER O LAÇO DE REPETIÇÃO  USANDO O FOR
for(let i = 1; i <=10; i++){
    console.log(`i = ${i}`)
}

// COLOCANDO UMA ESTRUTURA DE ARRAY DENTRO DO FOR

const grades = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < grades.length; i++){
    console.log(`grades = ${grades[i]}`)
}

