

// nome -   parametro
// willian  argumento

function saudacao(nome){
   return "Boa noite "+nome
}
const variavel = saudacao("Willian");
console.log(variavel)

function soma(x,y){
    return x + y
}
console.log(soma(10,5))


//  função Anonima

const raiz = function(n){
    return n ** 0.5
}
console.log(raiz(9))

// Arrow Function

const mult = (n) => {
    return n * 2
}

console.log(mult(5))