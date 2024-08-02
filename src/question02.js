
import leia from 'readline-sync'

/*Questão 02
Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas consoantes esse texto ou palavra tem. 
Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/

function verificarConsoantes() {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var vetorConsoantes = [];
    
    var palavraUser = leia.question("Digite uma palavra: ");
    palavraUser = palavraUser.toLowerCase(); 

    for (var i = 0; i < palavraUser.length; i++) {
        var palavraUserQuebrada = palavraUser[i];
        var ehVogal = false;

        for (var j = 0; j < vogais.length; j++) {
            if (palavraUserQuebrada === vogais[j]) {
                ehVogal = true;
                break;
            }
        }

        if (!ehVogal && palavraUserQuebrada >= 'a' && palavraUserQuebrada <= 'z') {
            vetorConsoantes.push(palavraUserQuebrada);
        }
    }

    console.log(`Número de consoantes: ${vetorConsoantes.length}`);
}

verificarConsoantes();