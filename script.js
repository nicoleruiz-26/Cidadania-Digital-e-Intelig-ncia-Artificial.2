let pontos = 0;
let respondidas = 0;

function responder(botao, correta){

const opcoes = botao.parentElement.querySelectorAll("button");

opcoes.forEach(btn=>{
btn.disabled=true;
});

if(correta){
botao.style.background="#00ff88";
pontos++;
}else{
botao.style.background="#ff4d4d";
}

respondidas++;

document.getElementById("resultado").innerHTML =
`🏆 Pontuação: ${pontos} / ${respondidas}`;

if(respondidas===5){

let mensagem="";

if(pontos===5){
mensagem="🌟 Excelente! Você é um Mestre da Segurança Digital!";
}
else if(pontos>=3){
mensagem="👏 Muito bem! Você sabe identificar Deepfakes.";
}
else{
mensagem="📚 Continue aprendendo sobre IA e desinformação!";
}

document.getElementById("resultado").innerHTML +=
`<br><br>${mensagem} 🎉`;
}
}
