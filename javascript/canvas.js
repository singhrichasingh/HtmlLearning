var x=0;
var y=0;
function init() {
    var canvas=document.querySelector('#canvas');
   var ctx=canvas.getContext('2d');
    requestAnimationFrame(snakeGame);
}
 
function drawSnake(){
   ctx.save();
   ctx.fillRect(x,y,5,5);
   ctx.restore();
}

function moveSnake(){
    var up=document.querySelector('#up');
    up.addEventListener(mouseclick,moveUp);
    var down=document.querySelector('#down');
    down.addEventListener(mouseclick,moveDown);
    var left=document.querySelector('#left');
    left.addEventListener(mouseclick,moveLeft);
    var right=document.querySelector('#right');
    right.addEventListener(mouseclick,moveRight);
    var quit=document.querySelector('#quit');
    quit.addEventListener(mouseclick,quit);
    var resume=document.querySelector('#resume');
    up.addEventListener(mouseclick,resume);
}
 
function getmousePos(canvas,evt)
{
var rectangle=canvas.getBoundinClientRect();
return {
x:evt.clientX-rectangle.left,
y:evt.clientY-rectangle.top
};
}


function moveUp(){
    position=getmousePos(canvas,event);
    return{
        x:mousepos.x,
        y:mousepos.y+2
}
}

function snakeGame(){
    ctx.clearRect(0,0,500,500);
    drawSnake();
    moveSnake();
    requestAnimationFrame(snakeGame);
}