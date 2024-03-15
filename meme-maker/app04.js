/* when click -> draw a line */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// set line width
ctx.lineWidth = 2;

// set colors
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#16a085",
    "#3498db",
    "#f1c40f",
    "#bdc3c7",
    "#8e44ad",
    "#c0392b",
    "#30336b",
    "#c7ecee",
    "#badc58",
    "#7ed6df",
    "#f6e58d",
]

// 클릭할 때마다 선이 그어지기 시작하는 위치를 변경해볼까
const coordinates = [
    
]


// click event function
function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    // choose color
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onClick);
