// let message = "Estou aprendendo JavaScript"

// console.log(message)

// //Exibindo em Maiúsculo
// console.log(message.toUpperCase())

// //Exibindo em Minúsculo
// console.log(message.toLowerCase())

// //Exibindo o tamanho da string
// console.log(message.length)

// // Verificando cumprimento mínimo de uma senha
// let password = "123,45"

// if (password.length < 6){
//     console.log("A senha deve ter no mínimo 6 caracteres")
// }else{
//     console.log("Senha válida")}

// let value = 12345
// console.log(value.toString().length)    

// //Acessando um caractere específico
// console.log(message[4])

// //Concatenando strings
// let firstName = "Roberto"
// let lastName = "Figueredo"

// let fullName = firstName + " " + lastName
// console.log(fullName)

// // Substituindo parte da string
// let newMessage = message.replace("JavaScript", "JS")
// console.log(newMessage)

// // Extraindo parte da string
// console.log(message.slice(0, 5))  // "Estou"
// console.log(message.slice(11))    // "JavaScript"

// // Removendo espaços em branco no início e no fim da string
// let textWithSpaces = "   Olá Mundo!   "
// console.log(textWithSpaces.trim())  // "Olá Mundo!"


// const creditCard = "1234567812344928"
// // console.log(creditCard.length)

// const lastDigts = creditCard.slice(-4)
// // console.log(lastDigts)

// // O padStart() preenche o início da string com um caractere específico até atingir o tamanho desejado
// const maskdNumber = lastDigts.padStart(creditCard.length, "X")
// console.log(maskdNumber)


// // Unindo e separando textos
// let text = "Estudar, Aprender, JavaScript"

// // Separa a string
// let separate = text.split(",")
// console.log(separate)

// // Unir texto
// let join =  separate.join(" - ")
// console.log(join)

let fruits = ["Banana", "Maçã", "Uva"]
console.log(fruits)
console.log(fruits.length)

//Acessa o primeiro item do array
console.log(fruits[1])

// Obtem o último item do array dinamicamente
console.log(fruits[fruits.length -1])

let fullname = "Roberto Figueredo"
console.log(fullname)

// Cria um Array a partir de uma string
console.log(fullname.split(" "))

// Cria um array com as letras da string
console.log(Array.from(fullname))


let users = []

// Adciona um item no final do array
users.push("Roberto")
users.push("Maria")
users.push("João")

// Adciona um item no início do array
users.unshift("Ana")


// // remove do inicio do array
// users.shift()

// // remove do final do array
// users.pop()

// console.log(users)
// console.log(users.length)

let position = users.indexOf("Roberto")
console.log(position)

//remove um item específico pela posição do indice
users.splice(position, 1)
console.log(users)


let array1 = [
    "Banana",
    {name: "João", age: 25},
    true,
    function(){
        console.log("Estou em um array")
    },
    [1, 2, 3]
]

// Acessando o objeto dentro do array
console.log(array1[0])
console.log(array1[1].age)
array1[3]()  // Executando a função dentro do array

let fruits2 = ["Banana", "Maçã", "Uva"]

// verifica se um item existe no array
console.log(fruits.includes("Uva"))  // true
console.log(fruits.includes("Pera")) // false