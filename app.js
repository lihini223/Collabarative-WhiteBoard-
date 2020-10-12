const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('colorPicker');

canvas.height = 600;
canvas.width = 600;
ctx.lineWidth = 10;
ctx.lineCap = 'round';

/*
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,300);
ctx.stroke();
*/

let mousePressed = false;

canvas.addEventListener('mousemove',(e) =>{ //mouse movement
    if(mousePressed == false){
        return;
    }
    draw(e);
} );

canvas.addEventListener('mousedown', (e) =>{ //mouse clicked
    mousePressed = true;
    draw(e);
});

canvas.addEventListener('mouseup', () =>{ //mouse released
    mousePressed = false;
    ctx.beginPath();
});

function draw(e){ //drawing functionality
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

function changeColor(){ //change pen color
    ctx.strokeStyle = color.value;
}