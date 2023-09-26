const NOME_TXT = document.getElementById("nome")
const MEDIA_TXT = document.getElementById("media")
const RESULTADO_TXT = document.getElementById("resultado")

NOME_TXT.innerHTML = prompt('Digite o nome do aluno!!!')

n1 = parseInt(prompt('Digite a 1ª nota!'))
n2 = parseInt(prompt('Digite a 2ª nota!'))
n3 = parseInt(prompt('Digite a 3ª nota!'))

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


/**
 * 1 - Criar formulário para coletar nome e 3 notas
 * 2 - Tratar erros (nome e nota obrigatórios e a nota tem que ser condizente, ou seja entre 1 e 10)
 * 3 - Formatar as casas decimais
 * 4 - Cor coerente com o resultado
 * ex: verde para aprovado, vermelho para reprovado e laranja para recuperação
 */
