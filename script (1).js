let perguntas = [
"Estava em casa na noite passada?",
"Estava sozinho?,Alguem prova isso?",
"Estamos investiguando o homicidio da vitima você conhecia ele/a",
"Ela morava perto de voçê?",
"Voçês se viam frequentemente?",
"Ela era de falar sobre a vida dela?",
"Sabia algo sobre a situação financeira que ela se encontrava?",
"Voçes estavam brigados por este motivo?",
"Tentou ajudar ela de alguma forma?",
"Conhece alguém que poderia ter feito isso?"

];
let respostas = [];
let atual = 0;
mostrarPergunta();
function mostrarPergunta() {
document.getElementById("pergunta").innerHTML = perguntas[atual];
document.getElementById("numero").innerHTML = "Pergunta" + (atual +
1);
}
function responder() {
let resposta = document.getElementById("resposta").value;
if (resposta == "") {
alert("Escolha uma resposta!");
return;
}
respostas[atual] = resposta;
atual++;
document.getElementById("resposta").value = "";
if (atual < perguntas.length) {
mostrarPergunta();
} else {
resultado();
}
}
function resultado() {
let pontos = 0;
if (respostas[0] != respostas[3] != respostas[6] != respostas[9]) pontos++;
if (respostas[1] != respostas[4] != respostas[7] != respostas[10]) pontos++;
if (respostas[2] != respostas[5] != respostas[8]) pontos++;
let mensagem = "";
switch (pontos) {
case 0:
mensagem = "VERDADE! Respostas consistentes.";
break;
case 1:
mensagem = "SUSPEITO! Uma contradição.";
break;
default:
mensagem = "POSSÍVEL MENTIRA! Várias contradições.";
}
document.getElementById("pergunta").innerHTML = mensagem;
document.getElementById("numero").innerHTML = "Fim do interrogatório";
document.getElementById("resposta").style.display = "none";
document.querySelector("button").style.display = "none";
document.getElementById("reiniciar").style.display = "inline-block";
}
function reiniciarJogo() {
location.reload();
}
