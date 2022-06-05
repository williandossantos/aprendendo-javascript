



- target pega o elemento da pagina a partir do click no documento
- classList.contains verifica se a classe contem no elemento 

document.addEventListener("click", e =>{
    const el = e.target

    if(el.classList.contains('iniciar')){
        clearInterval(timer)
        iniciaTempo()
        tempo.style.color= "green"
    }
})









