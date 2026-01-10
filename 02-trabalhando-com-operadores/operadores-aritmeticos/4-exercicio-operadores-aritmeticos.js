//trabalhando com expressoes, e entendendo como funciona escopos e hierarquia nelas

//nesse caso ele vai resolver de dentro para fora, por conta dos escopos, então no caso seria primeiro o 5+5, depois subtrair por 10 e esse resultado multiplicar por 2
let result = 2 * ((5+5) - 10)

//resultando em '0'
console.log(result)
