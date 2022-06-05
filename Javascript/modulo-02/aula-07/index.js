




// Trabalhado com new Date()

// adicionando 3 dias
//let umDia =  60 * 60 * 72 * 1000

/*
let data = new Date(2022, 05, 01)
console.log(data)

console.log("Dia", data.getDate())
console.log("Mes", data.getMonth())
console.log("Ano", data.getFullYear())
console.log("Horas", data.getHours())
console.log("Minutos", data.getMinutes())
console.log("Seggundo", data.getSeconds())
console.log("Dia da semana", data.getDay())

*/
function zeroEsquerda(){
    return num  >= 10 ? num : `0${num}`
}
function formataData(data) {
    let dia = data.getDate()
    let mes = data.getMonth()
    let anos = data.getFullYear()
    let Horas = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    return `${data} / ${mes} / ${data} ${dia} / ${mes} / ${anos}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)









