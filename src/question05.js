
import leia from 'readline-sync'
/*
Questão 05
Você deve desenvolver um programa para verificar se um baralho de cartas está viciado. O baralho possui 52 cartas,
divididas igualmente entre quatro naipes: copas, espadas, ouros e paus. 
O algoritmo deve fazer o sorteio de 1000 de naipes e contar quantas vezes cada naipe foi sorteado 
em uma série de sorteios e verificar se algum naipe tem uma frequência maior que 30%. 
Se houver, o programa deve indicar que o baralho pode estar viciado.*/

function girarBaralho() {
    
    function preencherVetor(tamanhoVetor, naipes) {
        var vetor = [];
        for (var i = 0; i < tamanhoVetor; i++) {
            
            var naipeAleatorio = Math.floor(Math.random() * naipes.length);
            vetor[i] = naipes[naipeAleatorio];
        }
        return vetor;
    }

    
    var naipes = ['Espadas', 'Paus', 'Ouros', 'Copas'];
    var jogadas = preencherVetor(1000, naipes); 
    var qntNaipe = {'Espadas': 0, 'Paus': 0, 'Ouros': 0, 'Copas': 0}; 

    
    for (var i = 0; i < jogadas.length; i++) {
        qntNaipe[jogadas[i]]++;
    }

    
    var porcentagemNaipe = {};
    for (var naipe in qntNaipe) {
        porcentagemNaipe[naipe] = ((100 * qntNaipe[naipe]) / jogadas.length).toFixed(2);
    }

    
    var viciado = false;
    for (var naipe in porcentagemNaipe) {
        if (porcentagemNaipe[naipe] > 25) {
            viciado = true;
            break;
        }
    }

   
    if (viciado) {
        console.log("Baralho viciado.");
    } else {
        console.log("Baralho não é viciado.");
    }

    console.table(porcentagemNaipe);
}

girarBaralho();