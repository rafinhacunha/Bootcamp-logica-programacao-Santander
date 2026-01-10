let valor = "1"

// esse dá como verdadeiro porque o JavaScript converte o numero em string quando compara com string
console.log(valor == 1)   // true
// aqui ele nao converte e se for diferente ele da como falso 
console.log(valor === 1)  // false

// aqui é diferenca, então se for diferente ele da true, e igual false
console.log(valor !== 1)

//outro exemplo

let cpfBloqueado = "123.455.222-45"
let cpfUsuario = "222.111.222-09"
let ehBloqueado = cpfBloqueado === cpfUsuario

//se printar false, significa que o cpf do usuario nao esta bloqueado
console.log(ehBloqueado)