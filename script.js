//An Example of Destruction
const bcrypt = require('bcryptjs');

// Exercise 1
/* 
Desestruturando objetos:Crie um objeto chamado pessoa com propriedades como nome, idade e cidade. Em seguida, utilize 
a desestruturação para extrair essas propriedades em variáveis separadas e exiba-as no console.
*/
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
/* 
Desestruturando arrays: Crie um array chamado frutas com vários nomes de frutas. Utilize a desestruturação para extrair 
o primeiro e o segundo elementos do array em variáveis separadas e exiba-os no console. 
*/

function exercise02() {
    const fruits = ["Pineapple", "Apple", "Banana", "Grapes"];

    const [f1, f2, ...rest] = fruits;

    console.log("Fruta 1: " + f1);
    console.log("Fruta 2: " + f2);
    console.log("Sobrou: " + rest);
}

// Exercise 3
/*
Parâmetros de função com desestruturação: Crie uma função chamada mostrarDetalhes que aceite um objeto como parâmetro, 
contendo informações sobre uma pessoa, como nome, idade e cidade. Use a desestruturação dos parâmetros da função 
para extrair e exibir essas informações no console.
*/
function exercise03({name = "Pessoa1", age = 10, city = "Cidadealeatoria"}) {
    console.log("Nome: " + name);
    console.log("Idade: " + age);
    console.log("Cidade: " + city);
}

// Exercise 4
/*
Desestruturação aninhada: Crie um objeto chamado empresa que contenha informações sobre uma empresa, incluindo um 
objeto endereço com propriedades como rua, cidade e CEP. Utilize a desestruturação para extrair o nome da cidade e 
exiba-o no console. 
*/
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
/* 
Desestruturando objetos em funções de retorno:Crie uma função chamada configurarUsuario que aceite um objeto com as 
configurações de um usuário, como nome, email e senha. A função deve retornar um objeto com as configurações, mas 
também incluir uma propriedade hashSenha que contenha um hash da senha original. Utilize a desestruturação para 
extrair as configurações de entrada e, em seguida, adicione a propriedade hashSenha ao objeto de retorno antes de 
retorná-lo.
*/
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
// To test exercise05 - console.log(usuarioConfigurado);


//And Last in cmd put node script.js
//Or try in index.html