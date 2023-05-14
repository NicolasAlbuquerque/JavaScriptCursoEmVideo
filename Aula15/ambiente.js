let num = [5,8,4]
console.log(`nosso vetor é o ${num}`)
console.log( num)
num[3]=6//adiciona um elemento no indice 3 como valor 6
num.push(7)//cria um elemnto automaticamente e decide automaticamente o indice e adiciona o valor 7
console.log(num.sort())// Para Ordenar em ordem Crescente o Array
console.log( num)
console.log(`O vetor tem ${num.length} posições`)  //Para saber o tamanho do array, não tem parenteses, não é metodo é atributo em JS

console.log(`O primeiro valor do vetor é ${num[0]}`)


//exibir todos os numeros do vetor
for(var pos=0; pos< num.length; pos++){
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`)
}


//jeito mais simples e novo do JS pra exibição
//FOR IN
//uso exclusivo para OBJETOS E PARA ARRAYS

for(let pos in num ){ //para cada posição em num 
    console.log(`A Posição ${pos} tem o valor ${num[pos]}`) //mostrar o num pos

}


//buscando valores no array

console.log(num.indexOf(3))//pesquisa o numero 7 e mostra onde ele esta, se aparecer -1 o valor nãofoi encontrado


//tratando quando não for encontrado!

let posi = num.indexOf(8)

if(posi == -1){ //tratando quando não for encontrado!
    console.log('Valor não encontrado!')
}else{
    console.log(`o Valor 8 esta na posição ${posi}`)
}
