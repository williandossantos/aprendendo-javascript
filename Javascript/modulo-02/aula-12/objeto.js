
const compra = {
    produto:"Macarrão",
    quantidade:"5",
    codigo: 40,
    pagamento:{
        "1x":"50.55",
        "2x":"2.70"
    }
}

//const {produto,quantidade, pagamento:{"1x":um, "2x":dois }} =  compra
const {produto,quantidade, ...spread} = compra
console.log(produto,quantidade, spread)








