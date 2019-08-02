
// ESTUDAREMOS SOBRE "ARRAY E MATRIZES" (FOR / FOREACH / MAP / FILTER / REDUCE)
// O QUE É UM ARRAY? CONJUNTO DE DADOS OU DE OBJETOS

// EXEMPLO DE UM  OBJETOS JS
const object = {
    key: 'value',
    keyString:'valueString',
    keyInt: 1
}

// EXEMPLOS DE ARRAY - VETOR E MATRIZ NO JAVA SCRIPT

const teams = ['Corinthians', 'São Paulo', 'Palmeiras','Santos', 1, 2, 3, 4]
console.log (teams[1]) // MOSTRA O VALOR DO ARRAY NA POSIÇÃO INDICADA
console.log (teams.length) // MOSTRA O TAMANHO DO ARRAY
console.log (teams) // LISTA TODOS OS VALORES DO ARRAY
console.table(teams) // MOSTRA OS VALORES DO ARRAY EM TABELA 

// ARRAY COM OBJETOS

const arrayOfObjects = [{joga: 'Corinthians'}, {joga: 'São Paulo'}, {joga: 'Palmeiras'}, {joga: 'Santos'}]
console.log (arrayOfObjects [3])  // MOSTRA O VALOR DO ARRAY NA POSIÇÃO INDICADA
console.log (arrayOfObjects.length)  // MOSTRA O TAMANHO DO ARRAY
console.log (arrayOfObjects)  // LISTA TODOS OS VALORES DO ARRAY
console.table (arrayOfObjects)  // MOSTRA OS VALORES DO ARRAY EM TABELA 

// FUNÇÕES DE ARRAY'S

const players_corinthians = ['Cassio', 'Fagner', 'Jadson', 'Pedrinho','Ramiro']
console.log (players_corinthians)
players_corinthians.pop() // REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log (players_corinthians)

players_corinthians.push('Vagner Love') // ADICIONA NA ULTIMA POSIÇÃO DO ARRAY
console.log (players_corinthians)

players_corinthians.shift() // REMOVE A PRIMEIRA POSIÇÃO
console.log (players_corinthians)

players_corinthians.unshift('Walter') // ADICIONA NA PRIMEIRA POSIÇÃO DO ARRAY
console.log (players_corinthians)

// METODO SPLICE PODE ADICIONAR QUANTO REMOVER ELEMENTOS DENTRO DE UM ARRAY

players_corinthians.splice (2, 0, 'Danilo Avelar', 'Lucas Pinton') /* AQUI ESTOU ADICIONANDO APARTIR DO ÍNDICE 02
E NÃO REMOVENDO */
console.log (players_corinthians)

players_corinthians.splice (3, 1) // REMOVENDO APENAS 01 ELEMENTO NA 3ª POSIÇÃO
console.log (players_corinthians)

// METODO SLICE SERVE PARA RETORNAR UM NOVO ARRAY

const players = players_corinthians.slice(3) // VAI SEPARAR APENAS OS ARRAYS APARTIR DO ÍNDICE 03
console.log (players)

// OUTRA FORMA DE ARRAY COM OBJETOS
const players_sp = {0: 'Jean', 1: 'Luan', 2: 'Liziero'}
console.log(players_sp)
Object.defineProperty(players_sp, 'toString', {
    value: function () { return Object.value (this)}, 
    enumerable: false
})
console.log (players_sp [2])


const buttonAdd = () => {}




