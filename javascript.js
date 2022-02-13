function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pega os quatro digitos do ano
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value.length == 0 || Number(fano.value > ano))){
        alert('[ERRO] Verifique os dados e corrija o erros')
    } else {
        var masc = document.getElementsByName('radiosex')[0]
        var fem = document.getElementsByName('radiosex')[1]
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando um img com JS
        img.setAttribute('id', 'foto') //dando um id para img
        if (masc.checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 6) {
                //bebe 
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fem.checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 6) {
                //bebe 
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhamulher.png')
            }
        }
    }
    res.innerHTML = `Seu gênero é ${genero} e sua idade é ${idade} anos `
    res.appendChild(img) //adicionar um elemento
}
 