const pessoas = [
    { nome: "joão", idade: 15, sexo: "M" },
    { nome: "maria", idade: 16, sexo: "F" },
    { nome: "jane", idade: 19, sexo: "F" },
    { nome: "marta", idade: 18, sexo: "F" },
    { nome: "josé", idade: 30, sexo: "M" },
    { nome: "ana", idade: 17, sexo: "F" },
    { nome: "julia", idade: 40, sexo: "F" },
    { nome: "mario", idade: 50, sexo: "M" },
    { nome: "marcia", idade: 25, sexo: "F" },
    { nome: "tiago", idade: 36, sexo: "M" },
];

const pessoas2 = [
    { nome: "jorge", idade: 15, sexo: "M" },
    { nome: "karla", idade: 16, sexo: "F" },
]

const nomes = ["teste", "tesss"]

//forEach
// for (let i = 0; i < pessoas.length; i++) {
//     console.log(pessoas[i]);
// }

// pessoas.forEach((pessoa,indice,pessoas) => {
//     console.log(pessoa,indice);
// })

//filter
// const pessoasComMaisDe18 = [];
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade >= 18) {
//         pessoasComMaisDe18.push(pessoas[i]);
//     }
// }
// console.log(pessoasComMaisDe18);

//console.log(pessoas.filter(pessoa => pessoa.idade >= 18));

//MAP
// const pessoasNomeSexo = [];
// for (let i = 0; i < pessoas.length; i++) {
//     pessoasNomeSexo.push({ nome: pessoas[i].nome, sexo: pessoas[i].sexo });
// }
// console.log(pessoasNomeSexo);

// const pessoasNomeSexo = pessoas.map(pessoa => {
//     const { nome, sexo } = pessoa;
//     return { nome, sexo }
// })
// console.log(pessoasNomeSexo);

//FIND -BUSCA SOMENTE UM ELEMENTO
//console.log(pessoas.find(pessoa => pessoa.nome === 'tiago'));

//INCLUDES -VERFICA SE UM ITEM ESTÁ CONTIDO EM UM ARRAY
// const pessoa = pessoas.find(pessoa => pessoa.nome === 'tiago');
// console.log(pessoas.includes(pessoa));

//EVERY -VERIFICA SE TODOS ITEM ATENDEM Á UMA CONDIÇÃO.
//console.log(pessoas.every(x => x.idade > 18))

//CONCAT - CONCATENA ARRAYS
//console.log(pessoas.concat(nomes));

//REDUCE REDUZIR SEU ARRAY A APENAS UM ITEM
// const somaIdades = pessoas.reduce((acumulador,pessoa)=>{
//     acumulador += pessoa.idade;
//     return acumulador;
// },0);
// console.log(somaIdades);

 const soma = pessoas
     .filter(pessoa => pessoa.idade > 18)
     .map(pessoas => pessoas.idade)
     .reduce((acumulador, idade) => {
        acumulador += idade;
         return acumulador;
     }, 0);
     console.log(soma);    
// const pessoasComMaisDe18 = [];
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade > 18) {
//         pessoasComMaisDe18.push(pessoas[i]);
//     }
// }

// const idades = [];
// for (let i = 0; i < pessoasComMaisDe18.length; i++) {
//     idades.push(pessoasComMaisDe18[i].idade);
// }
// let somaIdades = 0;
// for (let i = 0; i < idades.length; i++) {
//     somaIdades += idades[i];
// }

