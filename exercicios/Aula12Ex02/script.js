function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    

    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] VERIFIQUE AS INFORMAÇÕES INSERIDAS E TENTE NOVAMENTE')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        res.innerHTML= `Idade Calculada ${idade}`
        var genero=''
        var img = document.createElement('img')//gerando uma imagem com JS
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"

            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src', './assets/menino.png')
            }else if(idade >=10 && idade <= 21){
                //jovem
                img.setAttribute('src', './assets/jovem.png')
            }else if (idade < 50){
                //homem
                img.setAttribute('src','./assets/homem.png')
            }else {
                //idoso
                img.setAttribute('src', './assets/snehor.png')
            }


        }else if(fsex[1].checked){
            genero ='Mulher'

            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src', './assets/menina.png')
            }else if(idade >=10 && idade <= 21){
                //jovem
                img.setAttribute('src', './assets/jova.png')

            }else if (idade < 50){
                //mulher
                img.setAttribute('src', './assets/mulher.png')

            }else {
                //idosa
                img.setAttribute('src', './assets/senhora.png')

            }

        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.marginTop="3%"

    }

}