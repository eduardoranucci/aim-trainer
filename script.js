let canvas = document.querySelector('canvas');
let brush = canvas.getContext('2d');

corBackground = '#5e6061';
brush.fillStyle = corBackground;
brush.fillRect(0, 0, 1350, 570);

let xAleatorio;
let yAleatorio;
let acertou;

function dispara(ctx) {
    
    let x = ctx.pageX - canvas.offsetLeft;
    let y = ctx.pageY - canvas.offsetTop;

    cores = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    corAleatoria = cores[Math.floor(Math.random()*cores.length)];

    brush.fillStyle = corAleatoria;    
    brush.beginPath();
    brush.arc(x, y, 4, 0, 2 * 3.14);
    brush.fill();

    if (acertou == false) {
        if ((x > xAleatorio - 20)
            && (x < xAleatorio + 20)
            && (y > yAleatorio - 20)
            && (y < yAleatorio + 20)) {

            const elemento = document.querySelector('#pontos');
            pontos = parseInt(elemento.innerHTML);
            elemento.innerHTML = pontos+1;
            acertou = true;
        }
    }
}

function desenhaAlvo(x, y) {

    raio = 5;

    brush.fillStyle = '#Cb6115';
    brush.beginPath();
    brush.arc(x, y, raio+10, 0, 2 * 3.14);
    brush.fill();

    brush.fillStyle = '#Da7d3a';
    brush.beginPath();
    brush.arc(x, y, raio+5, 0, 2 * 3.14);
    brush.fill();

    brush.fillStyle = '#Cb6115';
    brush.beginPath();
    brush.arc(x, y, raio, 0, 2 * 3.14);
    brush.fill();

    const elemento = document.querySelector('#alvos');
    alvos = parseInt(elemento.innerHTML);
    elemento.innerHTML = alvos+1;
}

function apagaAlvo(x, y) {

    brush.fillStyle = corBackground;
    brush.beginPath();
    brush.arc(x, y, 16, 0, 2 * 3.14);
    brush.fill();

}

function atualizaCanvas() {

    acertou = false;
    apagaAlvo(xAleatorio, yAleatorio);
    xAleatorio = Math.floor(Math.random() * 1350);
    yAleatorio = Math.floor(Math.random() * 570);
    desenhaAlvo(xAleatorio, yAleatorio);
}

canvas.onclick = dispara;
setInterval(atualizaCanvas, 1000);