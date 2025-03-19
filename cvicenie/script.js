//  Nastavenie Canvas a Kontextu
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//  Nastavenie premenných pre modrý box (štvorec)
let boxX = 200, boxY = 200;
let speed = 10;
let boxColor = "blue";
let boxClicked = false;

//  Nastavenie premenných pre červenú loptu
let ballX = Math.random() * 400 + 50;
let ballY = Math.random() * 300 + 50;
let ballSpeedX = 2, ballSpeedY = 2;
let ballRadius = 20;
let ballColor = "red";

// Nastavenie premenných pre žltý trojuholník (skákajúci)
let triangleX = 60, triangleY = 350;
let jump = false, onGround = true;

//  Funkcia na pohyb modrého boxu pomocou klávesnice a tlačidiel
function moveBox(direction) {
    if (direction === "ArrowUp" && boxY > 0) boxY -= speed;
    if (direction === "ArrowDown" && boxY < canvas.height - 100) boxY += speed;
    if (direction === "ArrowLeft" && boxX > 0) boxX -= speed;
    if (direction === "ArrowRight" && boxX < canvas.width - 100) boxX += speed;
}

// Funkcia na pohyb trojuholníka doľava a doprava
function moveTriangle(direction) {
    if (direction === "left" && triangleX > 20) {
        triangleX -= speed;
    } else if (direction === "right" && triangleX < canvas.width - 20) {
        triangleX += speed;
    }
}

// Ovládanie modrého boxu šípkami
document.addEventListener("keydown", (event) => {
    moveBox(event.key);
});

//  Priradenie tlačidiel pre ovládanie boxu
document.getElementById("left").addEventListener("click", () => moveBox("ArrowLeft"));
document.getElementById("right").addEventListener("click", () => moveBox("ArrowRight"));
document.getElementById("up").addEventListener("click", () => moveBox("ArrowUp"));
document.getElementById("down").addEventListener("click", () => moveBox("ArrowDown"));

//  Priradenie tlačidiel pre ovládanie trojuholníka
document.getElementById("triangleLeft").addEventListener("click", () => moveTriangle("left"));
document.getElementById("triangleRight").addEventListener("click", () => moveTriangle("right"));

//  Ovládanie skoku trojuholníka medzerníkom
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && onGround) {
        jump = true;
        onGround = false;
    }
});

//  Funkcia pre animáciu objektov
function animate() {
    // 🔄 Vymazanie canvasu pred každým snímkom
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //  Pohyb lopty a odraz od stien
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX <= ballRadius || ballX >= canvas.width - ballRadius) ballSpeedX *= -1;
    if (ballY <= ballRadius || ballY >= canvas.height - ballRadius) ballSpeedY *= -1;

    //  Kreslenie lopty
    ctx.fillStyle = ballColor;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fill();

    //  Kreslenie modrého boxu
    ctx.fillStyle = boxColor;
    ctx.fillRect(boxX, boxY, 100, 100);

    // Detekcia kolízie medzi boxom a loptou (zmena farby boxu na červenú)
    if (
        boxX < ballX + ballRadius &&
        boxX + 100 > ballX - ballRadius &&
        boxY < ballY + ballRadius &&
        boxY + 100 > ballY - ballRadius
    ) {
        boxColor = "red";
    } else if (!boxClicked) {
        boxColor = "blue";
    }

    // Kreslenie žltého trojuholníka
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(triangleX, triangleY);
    ctx.lineTo(triangleX - 20, triangleY + 30);
    ctx.lineTo(triangleX + 20, triangleY + 30);
    ctx.closePath();
    ctx.fill();

    //  Logika skoku trojuholníka
    if (jump) {
        triangleY -= 5;
        if (triangleY <= 250) { 
            jump = false;
        }
    } else if (!onGround) {
        triangleY += 5;
        if (triangleY >= 350) { 
            triangleY = 350;
            onGround = true;
        }
    }

    // Zobrazenie súradníc boxu a lopty na canvas
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`Box: (${boxX}, ${boxY})`, 10, 20);
    ctx.fillText(`Ball: (${Math.floor(ballX)}, ${Math.floor(ballY)})`, 10, 40);

    //  Opakovanie animácie
    requestAnimationFrame(animate);
}

// Interaktivita – Kliknutie na objekty mení ich farbu
canvas.addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;

    // Ak klikneš na loptu, zmení farbu
    let dx = clickX - ballX;
    let dy = clickY - ballY;
    if (Math.sqrt(dx * dx + dy * dy) < ballRadius) {
        ballColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }
    
    //  Ak klikneš na box, zmení farbu
    else if (
        clickX >= boxX && clickX <= boxX + 100 &&
        clickY >= boxY && clickY <= boxY + 100
    ) {
        boxColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        boxClicked = true;
    }
});

//  Spustenie animácie
animate();
