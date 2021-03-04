const canvas = document.getElementById("target");
const context = canvas.getContext("2d");

canvas.width = 750;
canvas.height = 700;

const gridsize = 50;
let hazardArray = [];
let supportArray = [];
let winnerfrogs = [];
let remaining_lives = 3;

class Frog {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.movementX = gridsize;
        this.movementY = gridsize;
        this.speed = 0;
        this.status = 0;
    }

    moveUp() {
        //this only allows the frog to move up to goal slots when one row below them
        if (this.y == 125 && this.x > 50 && this.x < 100) {
            this.x = 75;
            this.y = this.y - this.movementY;
            victory(this.x, this.y);
        } else if (this.y == 125 && this.x > 200 && this.x < 250) {
            this.x = 225;
            this.y = this.y -this.movementY;
            victory(this.x, this.y);
        } else if (this.y == 125 && this.x > 350 && this.x < 400) {
            this.x = 375;
            this.y = this.y - this.movementY;
            victory(this.x, this.y);
        } else if (this.y == 125 && this.x > 500 && this.x < 550) {
            this.x = 525;
            this.y = this.y - this.movementY;
            victory(this.x, this.y);
        } else if (this.y == 125 && this.x > 650 && this.x < 700) {
            this.x = 675;
            this.y = this.y - this.movementY;
            victory(this.x, this.y);
        } else if (this.y > 125) {
            this.y = this.y - this.movementY
            this.status = 0;
        }
    }

    moveDown() {
        if (this.y < 650)
        this.y = this.y + this.movementY
        this.status = 0;
    }

    moveLeft() {
        if (this.x > 120) {
            this.x = this.x - this.movementX
            this.status = 0;
        }
    }

    moveRight() {
        if (this.x < 630) {
            this.x = this.x + this.movementX
            this.status = 0;
        }
    }

    draw() {
        context.beginPath();
        context.arc(this.x,this.y,20,0,2*Math.PI);
        context.fillStyle = "purple";
        context.strokeStyle = "purple";
        context.lineWidth = "1";
        context.fill();
        context.stroke();
    }

    update() {
        if (this.x >= 675) {
            this.x == 675;
        } else if (this.x <= 75) {
            this.x == 75;
        } else {
            this.x = this.x + this.speed;
        }    
    }
}

const frog = new Frog(375,675)

class WinnerFrog {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        context.beginPath();
        context.arc(this.x,this.y,20,0,2*Math.PI);
        context.fillStyle = "purple";
        context.strokeStyle = "purple";
        context.lineWidth = "1";
        context.fill();
        context.stroke();
    }

}

function drawmap () {
    //Draw the map layout
    context.beginPath();
    context.lineWidth = "50";
    context.strokeStyle = "green";
    context.moveTo(25, 25);
    context.lineTo(725, 25);
    context.stroke();

    context.beginPath();
    context.lineWidth = "25";
    context.strokeStyle = "green";
    context.moveTo(37.5, 50);
    context.lineTo(37.5, 100);
    context.stroke();

    context.beginPath();
    context.lineWidth = "25";
    context.strokeStyle = "green";
    context.moveTo(712.5, 50);
    context.lineTo(712.5, 100);
    context.stroke();

    context.beginPath();
    context.lineWidth = "25";
    context.strokeStyle = "green";
    context.moveTo(712.5, 50);
    context.lineTo(712.5, 100);
    context.stroke();

    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(25, 100, 700, 250);
    context.stroke();

    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(25, 350, 700, 50);
    context.stroke();

    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(25, 400, 700, 250);
    context.stroke();

    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(25, 650, 700, 50);
    context.stroke();

    for(let i=100; i<650; i+=150) {
        context.beginPath();
        context.fillStyle = "green";
        context.fillRect(i, 50, 100, 50);
        context.stroke();
    }

    for(let i=50; i<700; i+=150) {
        context.beginPath();
        context.fillStyle = "blue";
        context.fillRect(i, 50, 50, 50);
        context.stroke();
    }
}

function victory (x, y) {
    frog.x = 375;
    frog.y = 675;

    winnerfrogs.push(
        new WinnerFrog(x, y)
    )
}

function death () {
    frog.x = 375;
    frog.y = 675;
    frog.speed = 0;
    remaining_lives -= 1;
}

function updatescreen() {
    // Loops all functions to create a working game
    context.clearRect(0,0,canvas.width,canvas.height);

    drawmap();

    handleHazards();
    handleSupport();

    frog.update();
    frog.draw();

    floorislava();

    for(let i=0; i < winnerfrogs.length; i++) {
        winnerfrogs[i].draw();
    }

    window.requestAnimationFrame(updatescreen);
}

class Object {
    constructor(x, y, width, speed, color) {
        this.x = x;
        this.y = y;
        this.height = 45;
        this.width = width;
        this.speed = speed;
        this.color = color;
    }
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

}

class leftHazard extends Object {
    update(){
        this.x = this.x + this.speed;
        if ( this.x < 25 - this.width) {
            this.x = 725
        }
    }
}

class rightHazard extends Object {
    update(){
        this.x = this.x + this.speed;
        if ( this.x > 725 + this.width) {
            this.x = 25 - this.width
        }
    }
}

class Turtle extends Object {
    update(){
        this.x = this.x + this.speed;
        if ( this.x < 25 - this.width) {
            this.x = 725
        }
    }
}

class Log extends Object {
    update(){
        this.x = this.x + this.speed;
        if ( this.x > 725 + this.width) {
            this.x = 25 - this.width
        }
    }
}

function generateObjects(){
    //Lane 1
    for (let i=0; i < 3; i++){
        let x = i*210;
        hazardArray.push(new leftHazard(x, canvas.height - 100, gridsize, -1.1, "grey"))
    }

    //Lane 2
    for (let i=0; i < 3; i++){
        let x = i*235;
        hazardArray.push(new rightHazard(x, canvas.height - 150, gridsize, 1.4, "orange"))
    }

    //Lane 3
    for (let i=0; i < 3; i++){
        let x = i*180;
        hazardArray.push(new leftHazard(x, canvas.height - 200, gridsize, -0.7, "red"))
    }

    //Lane 4
    for (let i=0; i < 3; i++){
        let x = i*220;
        hazardArray.push(new rightHazard(x, canvas.height - 250, gridsize, 1.6, "yellow"))
    }

    //Lane 5
    for (let i=0; i < 3; i++){
        let x = i*240;
        hazardArray.push(new leftHazard(x, canvas.height - 300, gridsize*2, -0.5, "white"))
    }

    //River 1
    for (let i=0; i < 3; i++){
        let x = i*275;
        supportArray.push(new Turtle(x, canvas.height - 400, gridsize*3, -0.6, "red"))
    }

    //River 2
    for (let i=0; i < 3; i++){
        let x = i*260;
        supportArray.push(new Log(x, canvas.height - 450, gridsize*2, 0.7, "brown"))
    }

    //River 3
    for (let i=0; i < 3; i++){
        let x = i*300;
        supportArray.push(new Log(x, canvas.height - 500, gridsize*4, 0.4, "brown"))
    }
    
    //River 4
    for (let i=0; i < 3; i++){
        let x = i*320;
        supportArray.push(new Turtle(x, canvas.height - 550, gridsize*2, -0.4, "red"))
    }

    //River 5
    for (let i=0; i < 3; i++){
        let x = i*280;
        supportArray.push(new Log(x, canvas.height - 600, gridsize*3, 0.6, "brown"))
    }
}

generateObjects();

function handleHazards() {
    // draw and animate all hazards and check if frog is inside them
    for (let i=0; i < hazardArray.length; i++) {
        hazardArray[i].update();
        hazardArray[i].draw();
        collisionDetector(i);
    }
}

function handleSupport() {
    // draw and animate all logs and turtles
    for (let i=0; i < supportArray.length; i++) {
        supportArray[i].update();
        supportArray[i].draw();
        safetydetector(i);
    }
}

function collisionDetector(i) {
    //check if frog is inside a hazard object
    if(hazardArray[i].x - 15 < frog.x && frog.x < hazardArray[i].x + hazardArray[i].width + 15 && hazardArray[i].y < frog.y && frog.y < hazardArray[i].y + 48) {
        death();
    }
}

function safetydetector(i) {
    //check if frog is on a log or a turtle. Apply speed to frog if it is
    if(supportArray[i].x < frog.x && frog.x < supportArray[i].x + supportArray[i].width && supportArray[i].y < frog.y && frog.y < supportArray[i].y + 48) {
        frog.speed = supportArray[i].speed;
        frog.status = 1;
    } else if (frog.y > 350) {
        frog.speed = 0;
        frog.status = 0;
    } 
}

function floorislava() {
    if (frog.status == 0 && frog.y <= 350) {
        death();
    }
}

window.addEventListener('keydown', function(event){
    switch(event.keyCode) {
        case 65:
            frog.moveLeft();
            break;
        case 37:
            frog.moveLeft();
            break;
        case 87:
            frog.moveUp();
            break;
        case 38:
            frog.moveUp();
            break;
        case 68:
            frog.moveRight();
            break;
        case 39:
            frog.moveRight();
            break;
        case 83:
            frog.moveDown();
            break;
        case 40:
            frog.moveDown();
            break;
    }
});

window.requestAnimationFrame(updatescreen);