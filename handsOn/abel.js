
// ESTUDAREMOS SOBRE "ARRAY E MATRIZES" (FOR / FOREACH / MAP / FILTER / REDUCE)
// O QUE É UM ARRAY? CONJUNTO DE DADOS OU DE OBJETOS

// EXEMPLO DE UM  OBJETOS JS
const object = {
    key: 'value',
    keyString:'valueString',
    keyInt: 1
}

// EXEMPLOS DE ARRAY - VETOR E MATRIZ NO JAVA SCRIPT

const time = ['Corinthians', 'São Paulo', 'Palmeiras','Santos', 1, 2, 3, 4]
console.log (time[1]) // MOSTRA O VALOR DO ARRAY NA POSIÇÃO INDICADA
console.log (time.length) // MOSTRA O TAMANHO DO ARRAY
console.log (time) // LISTA TODOS OS VALORES DO ARRAY
console.table(time) // MOSTRA OS VALORES DO ARRAY EM TABELA 

// ARRAY COM OBJETOS

const arrayOfObjects = [{joga: 'Corinthians'}, {joga: 'São Paulo'}, {joga: 'Palmeiras'}, {joga: 'Santos'}]
console.log (arrayOfObjects [3])  // MOSTRA O VALOR DO ARRAY NA POSIÇÃO INDICADA
console.log (arrayOfObjects.length)  // MOSTRA O TAMANHO DO ARRAY
console.log (arrayOfObjects)  // LISTA TODOS OS VALORES DO ARRAY
console.table (arrayOfObjects)  // MOSTRA OS VALORES DO ARRAY EM TABELA 

// FUNÇÕES DE ARRAY'S

const corinthians = ['Cassio', 'Fagner', 'Jadson', 'Pedrinho','Ramiro']
console.log (corinthians)
corinthians.pop() // REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log (corinthians)

corinthians.push('Vagner Love') // ADICIONA NA ULTIMA POSIÇÃO DO ARRAY
console.log (corinthians)

corinthians.shift() // REMOVE A PRIMEIRA POSIÇÃO
console.log (corinthians)

corinthians.unshift('Walter') // ADICIONA NA PRIMEIRA POSIÇÃO DO ARRAY
console.log (corinthians)

// METODO SPLICE PODE ADICIONAR QUANTO REMOVER ELEMENTOS DENTRO DE UM ARRAY

corinthians.splice (2, 0, 'Danilo Avelar', 'Lucas Pinton') /* AQUI ESTOU ADICIONANDO APARTIR DO ÍNDICE 02
E NÃO REMOVENDO */
console.log (corinthians)

corinthians.splice (3, 1) // REMOVENDO APENAS 01 ELEMENTO NA 3ª POSIÇÃO
console.log (corinthians)

// METODO SLICE SERVE PARA RETORNAR UM NOVO ARRAY

const jogadores = corinthians.slice(3) // VAI SEPARAR APENAS OS ARRAYS APARTIR DO ÍNDICE 03
console.log (jogadores)

// OUTRA FORMA DE ARRAY COM OBJETOS
const jogador_sp = {0: 'Jean', 1: 'Luan', 2: 'Liziero'}
console.log(jogador_sp)
Object.defineProperty(jogador_sp, 'toString', {
    value: function () { return Object.value (this)}, 
    enumerable: false
})
console.log (jogador_sp [2])




