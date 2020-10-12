const socket = io();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('colorPicker');

canvas.height = 600;
canvas.width = 600;
ctx.lineWidth = 10;
ctx.lineCap = 'round'; //round line edges

socket.on('cordinates', (data) => { //catching data from other users
    ctx.lineTo(data.x, data.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(data.x, data.y);
    ctx.beginPath();
});


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

    socket.emit( 'cordinates', {x:e.clientX, y:e.clientY} );
}

function changeColor(){ //change pen color
    ctx.strokeStyle = color.value;
}

