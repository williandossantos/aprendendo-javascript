


let data = new Date()

let diaSem = data.getDay()

let texto;

switch (diaSem) {
    case 0:
        texto = "Domingo"
        break;
    case 1:
        texto = "Segunda"
        break;
    case 2:
        texto = "Terça"
        break;
    case 3:
        texto = "Quarta"
        break;
    case 4:
        texto = "Quinta"
        break;
    case 5:
        texto = "Sexta"
        break;
    default:
        texto = "Inválido"
        break;
}

console.log(texto)















