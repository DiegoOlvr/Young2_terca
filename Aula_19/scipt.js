const senha_elemento = document.getElementById("senha");
const copiar_elemento = document.getElementById("copiar");
const tamanho_elemento = document.getElementById("tamanho");
const maiusculas_elemento = document.getElementById("maiusculas");
const minusculas_elemento = document.getElementById("minusculas");
const numeros_elemento = document.getElementById("numeros");
const caracteres_elemento = document.getElementById("caracteres-especiais");
const gerar_senha_elemento = document.getElementById("gerar-senha");

const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const caracteres_especiais = '!@#$%¨&*()_+=-?/,.;<>:`|ç' 


function gerar_senha() {
    let tamanho_senha = tamanho_elemento.value
    console.log(tamanho_senha)
}

gerar_senha()