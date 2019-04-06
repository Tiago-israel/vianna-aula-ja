const pessoa = {
    nome: "tiago",
    ola: function () {
        return `olá ${this.nome}`
    },
    ola2: (nome)=>{
        return `olá ${nome}`
    }
}

// class Pessoa {
//     nome = "tiago";
//     ola() {
//         return `olá ${this.nome}`
//     }
// }
console.log(pessoa.ola());

