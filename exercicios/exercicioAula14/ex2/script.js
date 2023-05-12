function tabuada (){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length ==  0){
    window.alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1     

        tab.innerHTML=''  // limpa a info no bloco 
        while ( c <= 10){
        var item = document.createElement('option')//criando um elemento HTML
            item.text = `${c} X ${c} = ${n*c}`
            tab.appendChild(item)//adicionando um elemento filho 
            item.value=`tab ${c}`//mostra p valor selecionado na tab
            c++
        }
    }

}

