/* make a human */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// drawing arms
ctx.fillRect(210 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);

// drawing body - 20
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

//drawing head
ctx.arc(250, 100, 50, 0, 2*Math.PI);
ctx.fill();

// eye balls (white area)
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220 + 10, 80 + 10, 8, 0, 2*Math.PI);
ctx.arc(260 + 10, 80 + 10, 8, 0, 2*Math.PI);
ctx.fill();

// eye balls (black area)
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(225 + 10, 80+10, 6, 0, 2*Math.PI);
ctx.arc(265 + 10, 80+10, 6, 0, 2*Math.PI);
ctx.fill();

