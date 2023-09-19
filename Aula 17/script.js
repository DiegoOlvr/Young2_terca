const QUESTOES_QUIZ = [
    {
        questao: "Melhor fruta?",
        a: "Banana",
        b: "Maça",
        c: "Morango",
        d: "Uva",
        correta: "c"
    },
    {
        questao: "Melhor escola de programação?",
        a: "Baggius",
        b: "Ctrl + Play",
        c: "Happy Code",
        d: "Super Geek",
        correta: "b"
    },
    {
        questao: "Melhor professor?",
        a: "Diego",
        b: "Daniel",
        c: "Rodrigo",
        d: "Arthur",
        correta: "a"
    },
]

// identificando elementos
const quiz_titulo = document.getElementById("questao")
const alternativa_a = document.getElementById("text_a")
const alternativa_b = document.getElementById("text_b")
const alternativa_c = document.getElementById("text_c")
const alternativa_d = document.getElementById("text_d")
const botao = document.getElementById("enviar")
const respostas = document.querySelectorAll('.resposta')
const quiz_conteiner = document.getElementById('quiz')

// variaveis
let questao_atual = 0
let corretas = 0

carregar_quiz();

function carregar_quiz() {
    desmarcar_respostas()
    const info_questao = QUESTOES_QUIZ[questao_atual]

    quiz_titulo.innerText = info_questao.questao
    alternativa_a.innerText = info_questao.a
    alternativa_b.innerText = info_questao.b
    alternativa_c.innerText = info_questao.c
    alternativa_d.innerText = info_questao.d
}

function pegar_resposta() {
    let resp = undefined;

    respostas.forEach((resp_elemento) => {
        if (resp_elemento.checked) {
            resp = resp_elemento.id;
        }
    })
    return resp
}

function desmarcar_respostas() {
    respostas.forEach((resp_elemento) => {
        resp_elemento.checked = false
    })
}

botao.addEventListener("click", () => {
    const resp = pegar_resposta()
    const total_perguntas = QUESTOES_QUIZ.length

    if (resp)
    {
        if (resp === QUESTOES_QUIZ[questao_atual].correta)
        {
            corretas++
        }    
        questao_atual++
        if (questao_atual < total_perguntas)
        {
            carregar_quiz()    
        }
        else
        {
            quiz_conteiner.innerHTML = `<h1 class="reset_h1">Você acertou ${corretas}/${total_perguntas} questões </h1>
            <button class="reset_btn" onclick='location.reload()' >RESETAR</button>`  
        }
    }
})