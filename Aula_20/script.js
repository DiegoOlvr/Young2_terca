const FORMULARIO = document.getElementById('formulario')
const ENTRADA = document.getElementById('entrada')
const TAREFAS = document.getElementById('tarefas')

const CACHE = JSON.parse(localStorage.getItem('tarefas'))

if (CACHE) {
    CACHE.forEach((cache) => {
        adicionar_tarefa(cache)
    })
}

FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    adicionar_tarefa()

})

function adicionar_tarefa(tarefa) {
    let tarefa_entrada = ENTRADA.value

    if (tarefa) {
        tarefa_entrada = tarefa.text
    }

    if (tarefa_entrada) {
        const ELEMENTO_TAREFA = document.createElement('li')
        if (tarefa && tarefa.completed) {
            ELEMENTO_TAREFA.classList.add('completada')
            console.log('caiu aqui')
        }
        ELEMENTO_TAREFA.innerText = tarefa_entrada
        TAREFAS.appendChild(ELEMENTO_TAREFA)

        ELEMENTO_TAREFA.addEventListener('click', () => {
            ELEMENTO_TAREFA.classList.toggle('completada')
            atualizar_local_storage()
        })

        ELEMENTO_TAREFA.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            ELEMENTO_TAREFA.remove()
            atualizar_local_storage()
        })
        ENTRADA.value = ''
        atualizar_local_storage()
    }
}

function atualizar_local_storage() {
    const itens_tarefas = document.querySelectorAll('li')
    const tarefas = []
    itens_tarefas.forEach((elemento) => {
        tarefas.push({
            text: elemento.innerText,
            completed: elemento.classList.contains('completada'),
        })
    })
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}