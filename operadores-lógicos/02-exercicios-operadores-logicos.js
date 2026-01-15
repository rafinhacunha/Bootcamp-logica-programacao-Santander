// OR (||) se qualquer das condições forem verdadeiras a função acontece.

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo != "chuva") || (item === "guarda chuva")

console.log("As condicoes sao verdadeiras? " + podeSair)

podeSair = (tempo != "chuva") || (item === "qualquercoisa_tirando_guarda-chuva")

console.log("Qualquer uma das condicoes sao verdadeiras? " + podeSair)