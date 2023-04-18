let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let larguraCarros = 60;
let alturaCarros = 30;
let velocidadeCarros = [3.8, 3.2, 4.2, 5, 3.6, 2.3];

function amostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i],yCarros[i],larguraCarros,alturaCarros);
}
  }

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50
}