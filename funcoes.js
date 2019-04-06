function teste(...lista) {
    console.log("=> função", lista)
}
// teste();
//teste.call(this,1,2,3);
// teste.apply(this,[1,2,3]);


// function imprimirNomes(...nomes){
//     nomes.forEach(x => console.log(x));
// }

// function imprimirNome(nomes){
//     console.log(nome);
// }

//imprimirNomes(1,2,3,4,5,6,7);

function setInformacao(nome) {
    return function (idade) {
        return function (cpf) {
            return `${nome} ${cpf} ${idade}`;
        }
    }
}
//const func1 = setInformacao("tiago");
//console.log(func1(22));

const func2 = setInformacao("tiago")(22)("121221212")
console.log(func2);
