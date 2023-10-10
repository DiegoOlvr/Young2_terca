const NOME_TXT = document.getElementById("nome")
const MEDIA_TXT = document.getElementById("media")
const RESULTADO_TXT = document.getElementById("resultado")

function calcular_media() {

    n1 = parseInt(localStorage.getItem("n1"))
    n2 = parseInt(localStorage.getItem("n2"))
    n3 = parseInt(localStorage.getItem("n3"))
    
    let soma = n1 + n2 + n3
    let media = soma / 3
    
    if (media >= 7)
    {
        RESULTADO_TXT.innerHTML = 'Aprovado'
    }
    else if (media <= 4)
    {
        RESULTADO_TXT.innerHTML = 'Reprovado'
    }
    else
    {
        RESULTADO_TXT.innerHTML = 'Recuperação'
    }
    
    MEDIA_TXT.innerHTML = media
}

function nome() {
    aluno = localStorage.getItem("nome")
    NOME_TXT.innerHTML = aluno
}

nome()
calcular_media()
// console.log(localStorage.getItem("nome"))



/**
 * 1 - Criar formulário para coletar nome e 3 notas
 * 2 - Tratar erros (nome e nota obrigatórios e a nota tem que ser condizente, ou seja entre 1 e 10)
 * 3 - Formatar as casas decimais
 * 4 - Cor coerente com o resultado
 * ex: verde para aprovado, vermelho para reprovado e laranja para recuperação
 */
