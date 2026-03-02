let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec);
 
let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let load = document.getElementById("load");
let gameover = document.getElementById("gameover");
let mais = document.getElementById("mais")
let menos = document.getElementById("menos")

let jogoAtvo = true;  
let tentativas = 0;
let limite = 3;

function start() {
    if(!jogoAtvo) return;    
    document.getElementById("batata").innerText = "Aguardando resultado...";
    document.getElementById("cabra").src = "https://i.gifer.com/ZKZg.gif";
    load.currentTime = 0; 
    load.play();
    setTimeout(verificarResultado, 5005);
 
}
 
function verificarResultado() { 

        
    let palpite = parseInt(document.getElementById("chute").value);

    tentativas++;
 
    if(numSec == palpite){
        document.getElementById("batata").innerText = "Acertou Mizeravi!! 🔥" + tentativas + "Tentativas";
        document.getElementById("cabra").src = "https://img.freepik.com/fotos-premium/vencedor-3d-com-um-trofeu-de-ouro-nas-maos_168450-28.jpg";
        acerto.currentTime = 0;
        acerto.play();
        jogoAtvo = false;
    } 
    
    if(tentativas >= limite){
        document.getElementById("batata").innerText = "Você Perdeu !";
        document.getElementById("cabra").src = "https://media.tenor.com/qbUzHNqR4xMAAAAj/talking-super-mario-animated-stickers-super-mario.gif";
        gameover.currentTime = 0;
        gameover.play();
        jogoAtvo = false;
    }
    
    else if(numSec > palpite){
        document.getElementById("batata").innerText = "O número é maior";
        document.getElementById("cabra").src = "https://media1.tenor.com/m/h8MAyVu9IjEAAAAC/um-pouco-mais-300.gif"
        mais.currentTime = 0;
        mais.play();

    } else if(numSec < palpite){
        document.getElementById("batata").innerText = "o numero é menor";
        document.getElementById("cabra").src = "https://media1.tenor.com/m/LWT6p1iNMhkAAAAC/rapunzel-pascal.gif"
        menos.currentTime = 0;
        menos.play();

    } //else {
        //document.getElementById("batata").innerText = "Errou!! 😂";
        //document.getElementById("cabra").src = "https://img.freepik.com/fotos-premium/pessoas-brancas-3d-com-dor-de-cabeca_58466-6780.jpg?semt=ais_related_payload_trends&w=740&q=80";
        //erro.currentTime = 0;
        //erro.play();}
            
}

function reset() {
window.location.reload();
}

