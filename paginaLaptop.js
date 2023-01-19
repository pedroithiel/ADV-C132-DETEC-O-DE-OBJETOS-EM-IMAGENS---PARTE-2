var objectDetector;
var confirma;

function logout() {
    window.location = "index.html";
}


function preload() {
    img = loadImage("laptop.jpg");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    objectDetector  = ml5.objectDetector("cocossd", modelload)    
    document.getElementById("nomeDoObjetoEncontrado").innerHTML = "Status: Detectou objeto"
}

function modelload() {
    console.log("model load!")
    confirma = true
    objectDetector.detect(img, gotpose)
}

function gotpose(error, result) {
if (error) {
    console.log("não foi identificado nada")
} else {
    console.log(result);
}
}

function draw() {
    image(img, 0,0,600,500)
}
