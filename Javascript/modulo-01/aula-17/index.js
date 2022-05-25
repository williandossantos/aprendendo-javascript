
//Minha solução

let dado = prompt("Digite o numero: ")

let dadoRecebido =  Number(dado)
let sqrt = Math.ceil(Math.sqrt(dadoRecebido))
let inteiro = Number.isInteger(dadoRecebido)
let baixo   = Math.floor(dadoRecebido)
let cima   = Math.ceil(dadoRecebido)
let decimal = dadoRecebido.toFixed(2)

document.body.innerHTML =  `<h2>Seu numero é ${dadoRecebido}</h2>`
document.body.innerHTML += `<p>Raiz quadrada ${sqrt}</p>`
document.body.innerHTML += `<p>Numero é inteiro: ${inteiro}</p>`
document.body.innerHTML += `<p>Arredonda para baixo: ${baixo}</p>`
document.body.innerHTML += `<p>Arredonda para cima: ${cima}</p>`
document.body.innerHTML += `<p>Duas casas decimais: ${decimal}</p>`






