/* drawing house */

const canvas = document.querySelector("canvas");

//paint brush --> context
const ctx = canvas.getContext("2d");

//size
canvas.width = 800;
canvas.height = 800;

// wall
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

// door
ctx.lineWidth = 2; // 스타일 지정 후 stroke
// ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(300, 300, 50, 100);

//ceiling
ctx.fillRect(200, 200, 200, 20);

//triangle
ctx.moveTo(200,200);
ctx.lineTo(325,100);
ctx.lineTo(450,200);
ctx.fill();
