


function meuEscopo(){
    const form = document.querySelector(".form")

    const pessoas = []

    form.addEventListener("submit", function(event){
        event.preventDefault()
        const nome = document.querySelector(".nome")
        const sobrenome = document.querySelector(".sobrenome")
        const peso = document.querySelector(".peso")
        const altura = document.querySelector(".altura")
        const resultado = document.querySelector(".resultado")

        let dados = {
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        }
        pessoas.push(dados)
        
        resultado.innerHTML += `<p>${dados.nome} ${dados.sobrenome} ${dados.peso} ${dados.altura}</p>`

    })

}
meuEscopo()

