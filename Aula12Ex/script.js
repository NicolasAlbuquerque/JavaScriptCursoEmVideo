

function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#foto')
    var data = new Date()
    var hora=data.getHours()

    var min = data.getMinutes()

    msg.innerHTML= `Agora são ${hora} Horas e ${min} minutos. `

    if(hora >= 0 && hora < 12){
        img.src='./manha-01.png'
        document.body.style.background='#FFE95B'
    }else if (hora > 12 && hora <=18){
        img.src='./tarde-01.png'
        //img.setAttribute('src', 'noite-01.png') outra forma de alterar atributos com java Script
        document.body.style.background='#DC791C'

    }else{
        img.src='./noite-01.png'
        document.body.style.background='#344D52'

    }

}

