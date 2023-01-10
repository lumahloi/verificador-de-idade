function verificar(){
    // 1. saber em que ano estamos 
    var anoAtual = new Date().getFullYear()

    //2. saber o ano de nascimento digitado pelo usuário
    var anoNascimento = document.getElementById('nascimento')

    //3. criar limitações quando ao anonascimento a ser digitado 
    if (anoNascimento.value > anoAtual || anoNascimento.value.length == 0){
        alert('Insira um ano de nascimento válido!')
    } else {

        //4. saber a idade do usuário, é necessário usar o .value pra não resultar em NaN
        var idade = anoAtual - anoNascimento.value
    
        //5. declarar que o radio compoe uma variavel e a variável imagem não criada no HTML mas criada aqui
        var genero = document.getElementsByName('genero')
        var img = document.createElement('img')
    
        //5 saber qual genero foi marcado e declarar o genero oficial para o programa junto com a respectiva imagem da idade
        if (genero[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'hcrianca.png')
            } else if (idade >= 12 && idade < 19) {
                img.setAttribute('src', 'hadolescente.png')
            } else if (idade >=19 && idade < 60) {
                img.setAttribute('src', 'hadulto.png') 
            } else {
                img.setAttribute('src', 'hidoso.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'mcrianca.png')
            } else if (idade >= 12 && idade < 19) {
                img.setAttribute('src', 'madolescente.png')
            } else if (idade >=19 && idade < 60) {
                img.setAttribute('src', 'madulto.png') 
            } else {
                img.setAttribute('src', 'midoso.png')
            }
        }
        result.style.textAlign = 'center'
    
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`

        // x para inserir fotos é necessário usar o comando appendChild(nome da variavel que no caso é img)
        result.appendChild(img)
    }
}