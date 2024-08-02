import leia from "readline-sync"

/*Questão 01
Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, 
armazene essas informações em dois vetores, 
e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.*/


function verificarMaisVelho(){
    var vetorIdade = [];
    var vetorNomes = [];
    var maiorIdade;
    var maisVelho;
    for(var i = 0; i < 5; i++){
        var nomes = leia.question("digite seu nome: ");
        vetorNomes.push(nomes)
        var idade = leia.questionInt("escreva sua idade: ");
        vetorIdade.push(idade);

        if(i == 0){
            maiorIdade = idade;
            maisVelho = nomes;
        }
        if(idade > maiorIdade){
            maiorIdade = idade;
            maisVelho = nomes;
        }
    }
    console.log(maisVelho);
    console.log(maiorIdade);
}

verificarMaisVelho();