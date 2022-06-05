





let msg = "Te amo" 
let count = 0
 
let timer =  setInterval(() => {
    console.log(msg)
    count++
    parar(count)
}, 1000);

function parar(count){
    if(count == 10){
        return setTimeout(()=>{
            clearInterval(timer)
            console.log("Parou  execução")
        }, 1000)
    }
}










