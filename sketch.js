var canvas;
var edges;
var music;
var ground1, ground2, ground3, ground4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(50, 580, 200, 30);
    ground1.shapeColor = rgb(0, 0, 255);

    ground2 = createSprite(270, 580, 200, 30);
    ground2.shapeColor = rgb(255, 165, 0);

    ground3 = createSprite(490, 580, 200, 30);
    ground3.shapeColor = rgb(255, 0, 0);

    ground4 = createSprite(720, 580, 200, 30);
    ground4.shapeColor = rgb(0, 128, 0);

    box = createSprite(random(20,750), 300, 50, 50);
    box.shapeColor = rgb(255, 255, 255);
    box.velocityX = 4;
    box.velocityY = 8;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(ground1.isTouching(box) && box.bounceOff(ground1)){
        box.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(ground2.isTouching(box)){
        box.shapeColor = rgb(255, 165, 0);
    }

    if(ground3.isTouching(box) && box.bounceOff(ground3)){
        box.shapeColor = rgb(255, 0, 0);
    }

    if(ground4.isTouching(box) && box.bounceOff(ground4)){
        box.shapeColor = rgb(0, 128, 0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    



    drawSprites();
    //add condition to check if box touching surface and make it box
}
