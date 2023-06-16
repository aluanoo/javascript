function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança masc..webp')

            } else if (idade < 35) {
                //jovem 
                img.setAttribute('src', 'adulto masculino..webp')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem meia.certo.webp')

            }else {
                //idoso
                img.setAttribute('src', 'homem meia.webp')
            }

        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade < 11) {
                //criança
                img.setAttribute('src', 'criança fem..webp')

            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'adulto fem..webp')

            } else if (idade < 59) {
                //adulto
                img.setAttribute('src', 'mulher meia.webp')

            }else {
                //idoso
                img.setAttribute('src', 'mulher velha.webp')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
