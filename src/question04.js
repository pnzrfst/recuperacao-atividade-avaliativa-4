import leia from 'readline-sync'

/*Questão 04
Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário.
Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório.
A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.*/


function geradorSenha(){
    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    
    var senhaUsuario = '';

    var tamanhoSenha = leia.questionInt('informe o tamanho da senha: ');

    for(var i = 0; i < tamanhoSenha; i++){
        var gerarIndiceAleatorio = Math.floor(Math.random() * char.length);

        senhaUsuario += char[gerarIndiceAleatorio];
    }

    console.log(senhaUsuario)

}

geradorSenha();






