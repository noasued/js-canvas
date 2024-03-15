/* make a canvas */

const canvas = document.querySelector("canvas");

//paint brush --> context
const ctx = canvas.getContext("2d");

//size
canvas.width = 800;
canvas.height = 800;

//draw
//             x   y   width  height
ctx.rect(50, 50, 100, 100);

//move painting brush to the rectangle
ctx.moveTo(50, 50);
//create a line
ctx.lineTo(150,50);
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.stroke();
ctx.fill();

//위의 경로와 단절됨
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "tomato";
ctx.fill();