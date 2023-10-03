const NOME_INPUT = document.getElementById("nome_input")
const N1_INPUT = document.getElementById("n1_input")
const N2_INPUT = document.getElementById("n2_input")
const N3_INPUT = document.getElementById("n3_input")
const FORM = document.getElementById("formulario")

FORM.addEventListener("submit", (e) => {
    e.preventDefault()

    pegar_valores()
})

function pegar_valores() {
    const nome = NOME_INPUT.value
    const n1 = N1_INPUT.value
    const n2 = N2_INPUT.value
    const n3 = N3_INPUT.value

    if (nome === "") {
        erro_campo(NOME_INPUT, "O nome do aluno é obrigatório!")
    }
    else {
        sucesso_campo(NOME_INPUT)
    }


    localStorage.setItem("nome", nome)
    localStorage.setItem("n1", n1)
    localStorage.setItem("n2", n2)
    localStorage.setItem("n3", n3)
}

function erro_campo(elemento, mensagem) {
    const formControl = elemento.parentElement
    const small = formControl.querySelector("small");

    small.innerText = mensagem
    formControl.className = "form-control erro"
}