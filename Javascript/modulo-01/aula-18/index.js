



const alunos = ["Aluno01","Aluno02","Aluno03","Aluno04"]

// Acessando array

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])
console.log()

// alterando valor na memoria

alunos[0] = "Fetcher"
console.log(alunos[0])


// adicionando com metodo

alunos.unshift("Function")  // inicio
alunos.push("Array")      // fim

console.log("Adicionando")
console.log(alunos)
console.log()

// removendo elemento
alunos.shift("Function")  // inicio
alunos.pop("Array")      // fim

console.log("Removendo")
console.log(alunos)
console.log()

// Fatiando

console.log(alunos.slice(0, alunos.length-1))









