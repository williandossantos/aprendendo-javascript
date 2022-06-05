
let paragrafos =  document.querySelector(".paragrafos")



const p = document.querySelectorAll("p")

let bodyBack = getComputedStyle(document.body)

let bodyCor = bodyBack.background

console.log(bodyCor)

for (const tag of p) {
    tag.style.background = `${bodyCor}`  
    tag.style.marginBottom = "1rem"
    tag.style.color = "#ffffff"
}







