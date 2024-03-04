//An Example of Destruction
const bcrypt = require('bcryptjs');

// Exercise 1
function exercise01() {
    const pessoa = {
        name: "Lucas Ito",
        age: 18,
        city: "Lins"
    }

    const {name, age, city} = pessoa;

    console.log("Nome: " + name);
    console.log("Idade: " + age);
    console.log("Cidade: " + city);
}

// Exercise 2
function exercise02() {
    const fruits = ["Pineapple", "Apple", "Banana", "Grapes"];

    const [f1, f2, ...rest] = fruits;

    console.log("Fruta 1: " + f1);
    console.log("Fruta 2: " + f2);
    console.log("Sobrou: " + rest);
}

// Exercise 3
function exercise03({name = "Pessoa1", age = 10, city = "Cidadealeatoria"}) {
    console.log("Nome: " + name);
    console.log("Idade: " + age);
    console.log("Cidade: " + city);
}

// Exercise 4
function exercise04() {
    const enterprise = {
        name: "TozinhosTech",
        address: {
            street: "Rua dos Pombos",
            number: 100,
            city: "Lins",
            CEP: "16000-000"
        }
    }

    const {address: {city}} = enterprise;

    console.log("Cidade: " + city);
}

// Exercise 5
function exercise05({ nome, email, senha }) {
    const salt = bcrypt.genSaltSync(10);
    const hashSenha = bcrypt.hashSync(senha, salt);

    return {
        nome,
        email,
        senha: hashSenha 
    };
}

const usuarioConfigurado = exercise05({
    nome: 'João',
    email: 'joao@example.com',
    senha: 'senha123'
});

// exercise01();
// exercise02();
// exercise03({name: "Lucas Ito", age: 18, city: "Lins"});
// exercise04();
// console.log(usuarioConfigurado);


//And Last in cmd put node script.js
//Or try in index.html