
/*
try{
    console.log(login)
}catch(err){
    console.log("Deu erro! Sem variavel ativa")
}
*/


function somar(x, y){

    if(typeof x !== "number" || typeof y !== "number"){
        return x + y
    }{
        throw new("valor não é tipo numero")
    }

    
}

try{
    console.log(somar(5, 4))
    console.log(somar('x',"2"))
    console.log("certo")
}catch(err){
    console.log(err)
}




