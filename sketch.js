var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(850,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    
    block3=createSprite(515,580,200,30);
    block3.shapeColor="green";

    block4=createSprite(740,580,220,30)
    block4.shapeColor="red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=3;
    ball.velocityY=3;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }
  


    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
        music.play();
    }

    drawSprites();
}
