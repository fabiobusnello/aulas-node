// ESTUDANDO O FOREACH 
// FOREACH É UMA FORMA DE PERCORRER UM ARRAY

// FUNÇÃO TRADICIONAL 
const approved  = ['Abel', 'Magno', 'Fabio', 'Natan', 'Tiago']
approved.forEach(function (name, indice) { 
    console.log (`${indice + 1}) ${name}`) // O INDICE SIGNIFICA AQUI QUE ELE VAI COMEÇAR DO 1 
})

// OUTRO EXEMPLO USANDO ARROW FUNCTIONS
approved.forEach(name => console.log(name)) // VOU TER ACESSO APENAS AO NOME E NÃO O INDICE

// OUTRO EXEMPLO É ARMAZENAR UMA FUNÇAO EM UMA VARIAVEL E PASSAR ESSA FUNÇÃO POR FOREACH
const exibir_approved = aprovado => console.log(aprovado)
approved.forEach(exibir_approved) // OU SEJA ESSA FUNÃO FARÁ A MEMSA FUNÇÃO ACIMA

/* OBS. NO FOREACH É PASSADO O NAME E O INDICE MAIS TAMBEM É PASSADO UM TERCEIRO PARAMETRO QUE É O 
PROPRIO ARRAY */
// EXEMPLO

//const approved  = ['Abel', 'Magno', 'Fabio', 'Natan', 'Tiago']
approved.forEach(function (name, indice, array) { 
    console.log (`${indice + 1}) ${name}`)
    console.log (array)
})

// A FUNÇÃO CALL BACK ENVIADA PARA O FOREACH RECEBE 03 PARAMETROS (NOME / INDICE / ARRAY)
