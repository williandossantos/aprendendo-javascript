
/*
function maior(min,max){
    return Math.max(min, max)
}
console.log(maior(100,500))
*/

function fizzBuzz(valor) {
    /*let numero
    for(let i = 0; i < valor.lenght; i++){
        numero = 
    }*/
    
    if(valor % 3 == 0 && valor % 5 === 0) return "fizzbuz"
    if(valor % 3 == 0) return "fizz"
    if(valor % 5 == 0) return "buzz"
    


    return valor
    
}

for (let v = 0; v <= 20; v++) {
    console.log(fizzBuzz(v))
}



