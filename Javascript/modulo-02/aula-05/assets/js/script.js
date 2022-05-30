
let form = document.querySelector("#form")
let btnCalcular = document.querySelector(".calcular")

form.addEventListener("submit", e =>{

    e.preventDefault()
    
    let inputPeso = e.target.querySelector("#peso")
    let inputAltura = e.target.querySelector("#altura")

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    if(!peso){
        setResultado("Peso inválido", false)
        return
    }
    if(!altura){
        setResultado("Altura inválido", false)
        return
    }

    let imc = getImc(peso, altura)
    
    let kg = getPeso(imc)
})

const getPeso = (kg) => {
    if(kg <= 18.5){
        setResultado(`IMC ${kg}: Abaixo do peso`, true)
    }
    else if(kg >= 18.5 && kg <= 24.9){
        setResultado(`iMC ${kg}: Peso normal`, true)
    }
    else if(kg >= 25 && kg <= 29.9){
        setResultado(`iMC ${kg}: Sobrepeso`, true)
    }
    else if(kg >= 30 && kg <= 34.9){
        setResultado(`iMC ${kg}: Obesidade grau 1`, true)
    }
    else if(kg >= 35 && kg <= 39.9){
        setResultado(`iMC ${kg}: Obesidade grau 2`, true)
    }
    else{
        setResultado(`iMC ${kg}: Obesidade grau 3`, true)
    }
}

const getImc = (peso, altura) => {

    let imc = peso / altura ** 2
    return imc.toFixed(2)
}

const criaP = () => {

    // cria um elemento
    let p = document.createElement("p")

    // retorna p > tag paragrafo
    return p
}


const setResultado = (msg, isValid) =>{
    let resultado = document.querySelector(".resultado")
    resultado.innerHTML = ''

    let p = criaP()

    if(isValid){
        p.classList.add("p-resultado")
    }else{
        p.classList.add("p-bad")
    }

    p.classList.add("p-resultado")
    p.innerHTML = msg
    resultado.appendChild(p)
}


