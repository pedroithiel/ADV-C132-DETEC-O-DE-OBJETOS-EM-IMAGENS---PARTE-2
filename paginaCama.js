var objectDetector;
var confirma;
var array = [];

function logout() {
    window.location = "index.html";
}


function preload() {
    img = loadImage("cama.jpg");
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
        array = result;
    }
}

function draw() {
    image(img, 0, 0, 600, 500)

    if (confirma) {
        for (i = 0; i < array.length; i++) {

            fill("red")
            percent = floor(array[i].confidence * 100)
            text(array[i].label + " " + percent + "%", array[i].x, array[i].y)

            noFill()
            stroke(255, 0, 0)
            rect(array[i].x, array[i].y, array[i].width, array[i].height)
        }
    }


    console.log(array)
}
