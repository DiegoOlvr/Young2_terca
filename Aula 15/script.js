var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var horario = document.getElementById('horario')
let hora = window.prompt('Digite um número')
var data = new Date();
var hora2 = data.getHours();
console.log(horario)

horario.innerText = `Agora são ${hora} horas`

if (hora >= 5 && hora < 12) {
    document.body.style.background = 'orange';
    msg.innerHTML = 'Bom dia!';
    img.src = ''
}
else if (hora > 12 && hora <= 18) {
    document.body.style.background = 'red';
    msg.innerHTML = 'Boa tarde!';
}
else {
    document.body.style.background = 'darkblue';
    msg.innerHTML = 'Boa noite!';
    img.src = './img/boanoite.jpg'
}