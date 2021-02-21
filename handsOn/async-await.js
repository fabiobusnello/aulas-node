//ESTUDANDO O ASYNC AWAIT

async function main() {

try{
    if( await getResultado(5) > 10) { // O VALOR 5 ESTÁ PASSANDO COMO PARAMETRO
        console.log('O valor que retornou é maior que 10');
    
    if( await getResultado(3) < 10) {
        console.log('O valor que retornou é menor que 10');
    }
    }
} catch (err){
    console.log('Deu erro');
    console.log(err);
}
}
main()

function getResultado(parametro){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(parametro * 2.5);
        }, 2000)
    })
}
