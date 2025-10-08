
// Cria um objeto vazio
const obj= {}
console.log(obj)

// Cria um objeto com propriedades e métodos
const user ={
    name: 'Roberto',
    email: 'roberto.fr@unifesspa.edu.br',
    age: 32,
    
    address: {
        street: 'Av. dos Ipês',
        number: 123,
        city: 'Marabá',
        state: 'PA',
        postal_code: '68500-000'
    },

    message: function(){
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`)
    }

}

// Acessa propriedades do objeto usando a notação de ponto
console.log(user.name)

// Acessa propriedades do objeto aninhado
console.log(user.address.city)

// Execulta o método do objeto
user.message()

// Notação de colchetes
console.log(user['email'])
console.log(user['address']['city'])
user["message"]()

// Atualiza uma propriedade do objeto
const product = {
    name: 'Camisa',
    price: 29.90,
    quantity: 50,
}

// Acessando a propriiedade do objeto
console.log(product.name)

// Atualizando a propriedade do objeto
console.log(product.price)
product.price = 34.90
console.log(product.price)


/*
 OPTIONAL CHAINING (?.) - encadeamento opcional. Se a propriedade ou função chamada é nullisg (null ou undefined), o JS não tenta acessar a próxima propriedade ou função, evitando erros.
, a expressão retorna undefined ao invés de gerar um erro.

Últil ao explorar contaúdos de um objeto quando não existe garantia da existência de todas as propriedades ou métodos.
*/

const client = {
    id: 1,
    name: 'Ana Silva',
    // address: {
    //     street: 'Rua das Flores',
    //     number: 123,
    //     city: 'São Paulo',
    //     geo: {
    //         lat: -23.55052,
    //         lng: -46.633308
    //     },
    // },
    message: function(){
        console.log('Óla, ${this.name}!')
    }    
}  

console.log(client.name)


function createProduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
   }
    return product
}

const product1 = createProduct('Camiseta')
console.log(product1.name)
product1.details()

const product2 = createProduct('Caneca')
console.log(product2.name)
product2.details()