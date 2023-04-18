//ator
let xAtor = 100;
let yAtor = 370;
let alturaAtor = 30;
let larguraAtor = 30;
let colisao = false;
let meusPontos = 0;

function amostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, alturaAtor,larguraAtor)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (foraDaTela()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play()
        if (meusPontos > 0){
          meusPontos -=1
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1
    somDoPonto.play();
    colidiu();
  }  
}

function foraDaTela(){
  return yAtor < 366
}
