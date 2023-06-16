function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hoas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagens/manhã.2.webp'
        document.body.style.background = '#E6C7A9'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.2.webp' 
        document.body.style.background = '#F59100'
    } else {
        //boa noite
        img.src = 'imagens/noite.2.webp'
        document.body.style.background = '#0B1D1D'
    }

}