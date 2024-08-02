import leia from 'readline-sync'

/*Questão 03
Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário e armazene esses números em um vetor. 
O algoritmo deve parar de solicitar valores, quando o usuário digitar o numero 0. Ao final,
o algoritmo deve calcular e imprimir a média desses números, a soma de todos os números o maior e menor digitado.
(Desconsiderar o 0).*/

function calculosNumerosInteiros(){
    var vetorNumeros = [];    
    var mediaNumeros;
    var somaNumeros = 0;
    var maior;
    var menor;   

    for(var i = 0; i < 4; i++){

        var numeroUser = leia.questionInt('digite um numero: ');
        if(numeroUser == 0){
            break;
        }
        vetorNumeros.push(numeroUser);
        somaNumeros += numeroUser;
        

        if(i == 0){
            maior = numeroUser;
            menor = numeroUser;
        }

        if(numeroUser > maior){
            maior = numeroUser;
        }

        if(numeroUser < menor){
            menor = numeroUser;
        }

        mediaNumeros = somaNumeros / vetorNumeros.length;
    }
    
    console.log(vetorNumeros);
    console.log(somaNumeros);
    console.log(mediaNumeros);
    console.log(`maior: ${maior}, menor: ${menor}`)

}

calculosNumerosInteiros();