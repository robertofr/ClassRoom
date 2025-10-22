// console.log(new Date(0))

// console.log(new Date().getTime()) // Erro

// console.log(new Date(2025, 9, 17))

// // define data e hora
// console.log(new Date(2025, 9, 17, 15, 03, 45))

// console.log(new Date("2025-10-17T15:03:45")) // Formato ISO 8601

// console.log(new Date("October 17, 2025 15:03:45")) // Formato americano

// let date = new Date("2025-10-17T15:03:45")

// console.log(date.getDay()) // Dia da semana (0-6)
// console.log(date.getDate()) // Dia do mês (1-30)
// console.log(date.getMonth()) // Mês (0-11)
// console.log(date.getFullYear()) // Ano (4 dígitos)

// console.log(date.getHours()) // Hora (0-23)
// console.log(date.getMinutes()) // Minutos (0-59)
// console.log(date.getSeconds()) // Segundos (0-59)

// let date = new Date("2025-10-17T15:03:45")

// // modificar data o ano
// date.setFullYear(2026)

// //Modificar mês
// date.setMonth(11) // Dezembro (0-11)

// // Modificar dia do mês
// date.setDate(25)

// // Modificar horas
// date.setHours(20)


// console.log(date)

// let year = date.getFullYear()
// let month = date.getMonth() + 1 // Ajuste para exibição
// let day = date.getDate()
// let hour = date.getHours()
// let minute = date.getMinutes()


// console.log(`${day}/${month}/${year}`)

const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))
console.log(new Intl.DateTimeFormat('en-US').format(new Date()))