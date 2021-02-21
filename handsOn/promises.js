// AULA DE PROMISES JS

/* O PROMISES É USADO QUANDO QUEREMOS TER ALGUM TIPO DE PROCESSAMENTO ASSINCRONO. A PROMISES ELA 
TEM DOIS DESTINOS, 1º ACEITAÇÃO E RESOLVER E A 2º REJEIÇÃO. A PROMISES É UMA ESTRUTURA QUE TEM POR
OBJETIVO APRESENTAR UMA OPERAÇÃO ASSINCRONA E QUE PODE SER ATENDIDA OU SER REJEITADA.*/

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { // O RESOLVE AQUI ESTÁ INDICANDO A SITUAÇÃO DE ACEITE
        setTimeout(() =>{ // setTimeout SERVE PARA CHAMAR FUNÇÕES DE RETORNO (CALLBACK) APÓS UM TEMPO
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Deu certo!')
    .then (frase => frase.concat ('?!?')) // A FUNÇÃO THEN É CHAMADA QUANDO RESOLVE A PROMISES
    .then (outraFrase => console.log(outraFrase)) /* EU POSSO INSERIR VARIOS THEN POQUE QUANDO TERMINAR 
     IRÁ PASSAR PARA O OUTRO*/

     // TRATANDO AGORA O ERRO
    .catch (e => console.log(e))

// OUTRA FORMA DE USAR PROMISES
const http = require('http')
const getTurma = letra => {
const url = `inserir o link onde tem o arquivo json${letra}.json`
return new Promises ((resolve, reject) => { // AQUI SEMPRE É PASSADO 02 FUNÇÕES RESOLVE E REJECT
    http.get (url, res => {
        let resultado = ''

        res.on ('data', dados =>{
            resultado += dados
        })
        res.on (`end`, () =>{
            try{
                resolve(JSON.parse(resultado))
            } catch(er){
                reject(er)
            }
        })
    })
}) 
}
let nomes = []
getTurma('A').then (alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

getTurma('B').then (alunos =>{
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))

getTurma('C').then (alunos =>{
    nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
    console.log(nomes)

})
})
})

// CONCATENANDO TUDO DENTRO DE UM ARRAY
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then (nomes => console.log (nomes))

// INSERINDO UMA TURMA QUE NÃO EXISTE PARA ELE IR PARA O ERRO 
getTurma('D').catch (er => console.log(er.message))