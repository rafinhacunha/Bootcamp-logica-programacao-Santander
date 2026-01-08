//declarando variaveis que podem se alterar
let poteCafe = "Café Pilão"
let poteAcucar = "Açucar Cristal"
let poteBiscoito = "Biscoito Polvilho"

//variavel constante
const mensagemRepetida = "Na cozinha tem: "

//output/saída sem usar a variavel constante
console.log ("Na cozinha tem: " + poteCafe + ", " + poteAcucar + ", " + poteBiscoito)

//alterando a variavel após a declaração
poteCafe = "Café Barroco"

//output com a variavel constante e com a alteracao da variavel poteCafe
console.log(mensagemRepetida + poteCafe + ", " + poteAcucar + ", " + poteBiscoito)
