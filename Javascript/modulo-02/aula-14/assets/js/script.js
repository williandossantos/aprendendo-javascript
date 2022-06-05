


let container = document.querySelector(".container")

const element = [
    {tag:"p", text:"Isso é um paragrafo"},
    {tag:"div", text:"Isso é uma divisão"},
    {tag:"section", text:"Isso é uma seção"},
    {tag:"footer", text:"Isso é um rodape"}
]
let line;
for(let c = 0; c < element.length; c++){

    line = document.createElement(element[c].tag)
    line.innerText = element[c].text
    container.appendChild(line)
    
    
}









