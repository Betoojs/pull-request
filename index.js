var ul = document.getElementById('menu')
var inputComNome = document.getElementById('input')

const btn = () => {
    let nome = document.createElement('li');
    ul.innerHTML = `Seja bem vindo ${inputComNome.value}`;
    ul.appendChild(nome);
}