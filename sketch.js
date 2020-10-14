var bg
var groundimg
var ground
var marioimg
var jump
var obstacle
var brickimg

function preload () 
{
bg=loadImage("bg.png")
groundimg=loadImage("ground2.png")
marioimg=loadAnimation("mario00.png", "mario01.png", "mario02.png", "mario03.png")
jump=loadSound("jump.mp3");
obstacleimg=loadAnimation("obstacle1.png", "obstacle2.png", "obstacle3.png", "obstacle4.png")
brickimg=loadImage("brick.png")
}
function setup()
{
createCanvas(1200,600)
ground=createSprite(600,550,1200,100)
ground.scale=2
ground.addImage("groundimg",groundimg)
ground.velocityX=-5
ground.x=ground.width/2
mario=createSprite(300, 440, 50,40)
mario.addAnimation("marioimg",marioimg)
mario.scale=2.2
}
function draw()
{
    
    background(bg)


    if (keyDown("space")&& mario.y>0)
    {
        mario.velocityY=-20
        jump.play()
        console.log("mario.velocityY")
    }
    mario.velocityY=mario.velocityY+1;
    mario.collide(ground)
    if (ground.x<0)
    {
        ground.x=ground.width/2
    }
    spawnObstacles();
    spawnBricks();
    drawSprites()
}

function spawnObstacles()
{
    if (frameCount%100===0)
    {
    var obstacle=createSprite(1100, 440, 50,40)
    obstacle.velocityX=-4
    obstacle.addAnimation("obstacleimg", obstacleimg)
    obstacle.scale=1.5
}
}
function spawnBricks()
{
    if (frameCount%80===0){
        var bricks=createSprite(600, 300, 50, 50)
        bricks.velocityX=-3
        bricks.addImage("brickimg", brickimg)
        bricks.scale=1
    }
}