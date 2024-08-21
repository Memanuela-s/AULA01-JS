// exibir no terminal
console.log ("Olá mundo");
//exibir no navegador
document.write("Olá navegador!");  

// um alerta
/*
comentario do bloco
aasaddaaffa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
estoy loco lalalalala alerta de confirmação!");
*/
// Colocar o nome do aluno
var nome = window.prompt ("informe o nome:");
//guardar a primeira nota
var nota1 = window.prompt ("digite a nota1:");
// converte a nota 1 de texto para decimal
nota1 = parseFloat (nota1);
//guardar a segunda nota
var nota2 = window.prompt ("digite a nota2:");
//convereter a nota 2 de texto para decimal
nota2 = parseFloat (nota2);
// calculo a media das duas notas


var media = (nota1 + nota2)/2;
/*
// gera exibição apenas com calculo da notacx

//window.alert("a média das notas é: " + media);

var mensagem = nome + ", você obteve a média : " + media;
window.alert(mensagem);
