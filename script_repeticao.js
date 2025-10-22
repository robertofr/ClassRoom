
// While: executa enquanto a condição for verdadeira
/*
let i = true
while(i){
    let response = window.prompt("Deseja continuar: 1 (SIM) / 2 (NÃO)?")

    if(response === "2"){
        i = false
    }
}
    window.alert("Segue o jogo...")
 */

// Do While: executa pelo menos uma vez, depois verifica a condição
/*
let value = 0

do{
    value++
    console.log(value)
} while(value < 10)

console.log("Fim do loop...")
*/

// For: executa um número determinado de vezes

let number = 7
for (step = 0; step <= 10; step++){
    console.log(`${number} x ${step} = ${number * step}`)
}