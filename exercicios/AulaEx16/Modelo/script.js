let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <=100){
            return true
        } else{
            return false
        }
    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) !=-1){
            return true
        }else{
            return false
        }

    }

function adicionar(){

    if (isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('ok')
        valores.push(Number(num.value))//adicionando o valor no Array através da iteração com a tela
        let item = document.createElement('option')//adicionando o valor no option
        item.text= `Valor ${num.value} Adicionado!!`//texto quer vai aparecer 
        lista.appendChild(item)//criação de um elemento filho 
        res.innerHTML=''
    }else{
        window.alert("Valor inválidou ou já está na lista.")
    }
    // para apagar o que foi escxrito
        num.value = ''
        num.focus()

}



    function finalizar(){

        if (valores.length == 0){//se o valor for diferente de zero, adicionar
            window.alert('Adicione Valores antes de Finalizar')
        }else{
            let total = valores.length
            let maior =valores [0]//indicando que o maior numero é o primeiro
            let menor = valores [0]// indicando que o menor numero é o primeiro inserido
            let soma = 0
            let media= 0


            for (let pos in valores){//percorre a lista

                soma += valores[pos]// somar os valores

                


                if(valores[pos] > maior)//verifica o maior numero
                maior =valores[pos]

                if (valores[pos] < menor)//verifica  o menor
                menor = valores[pos]
            }

            media = soma / total //calculando a media utilizando as variaveis já estaciadas, e metodos utilizados

            res.innerHTML=''
            

            if(valores.length == 1){
            res.innerHTML += `<p> Ao todo, temos ${total} numero casastrados</p>`
        }else{
            res.innerHTML += `<p> Ao todo, temos ${total} numeros casastrados</p>`

        }
        res.innerHTML += `<p> O menor valor enconrado foi o  ${menor} </p>`
        res.innerHTML += `<p> O maior valor enconrado foi o  ${maior} </p>`
        res.innerHTML  += `<p>Somando todos os valores temo ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é de ${media}</p>`
        }
    }
