// REVISÃO DE PROMISES

let promisesRevisaoOk = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Deu certo');
    }, 3000);
})

let promisesRevisaoErr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!');
    }, 3000);
})

// USANDO ESSAS 02 OU MAIS PROMISES DENTRO DE UM ARRAY
Promise.all([promisesRevisaoOk, promisesRevisaoErr]) // RECEBE UM ARRAY
.then(([resultado1, resultado2]) => { // SE FOR ACEITO EXECUTA O THEN
    console.log('Todas as Promises foram resolvidas!')
        console.log(resultado1)
        console.log(resultado2)
})
.catch((error) => { // SE FOR REJEITADO CAIRÁ NO CATCH
    console.log('Uma das Promises foi rejeitada')
    console.log(error)
})

// promisesRevisaoErr.then((resultadoErr) => {
//     console.log(resultadoErr);
// }).catch((error) => {
//     console.error(error)
// })