//Excercicie 1
function excercise01(){
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

//Excercicie 2
function excercise02(){
    const fruits = ["Pinnaple", "Apple", "Banana", "Grapes"];

    const [f1, f2, ...rest] = fruits;

    console.log("Fruta 1: " + f1);
    console.log("Fruta 2: " + f2);
    console.log("Sobrou: " + rest);

}

//Excercicie 3
function excercise03({name = "Pessoa1", age = 10, city = "Cidadealeatoria"}) {
    console.log("Nome: " + name);
    console.log("Idade: " + age);
    console.log("Cidade: " + city);
}

//Excercicie 4
function excercise04() {
    const enteprise = {
        name: "TozinhosTech",
        address: {
            street: "Rua dos Pombos",
            number: 100,
            city: "Lins",
            CEP: "16000-000"
        }
    }

    const {address:{city}} = enteprise;

    console.log("Cidade: " + city);
}

function excercise05({ nome, email, senha }) {
    // This code I get of Internet
    const hashSenha = hashSync(senha, 10); 

    return {
        nome,
        email,
        senha, 
        hashSenha
    };
}


const usuarioConfigurado = excercise05({
    nome: 'João',
    email: 'joao@example.com',
    senha: 'senha123'
});

console.log(usuarioConfigurado);

/*
Eng: The documentation is in English to practice the habit of writing in English.
Pt: "A documentação está em inglês para prática do hábito de escrever em inglês."
*/

// Press Enter to test
// excercise01();
// excercise02();
// You can edit the "excercise03" function to test it.

// excercise03({name: "Lucas Ito", age: 18, city: "Lins"});
// excercise04();

//And Last in cmd put node script.js
//Or try in index.html