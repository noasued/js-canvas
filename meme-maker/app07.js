/* 선 색상 조정 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color"); // get line color

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.color = color.value;

let isPainting = false;

function onMove (event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting () {
    isPainting = true;
}

function cancelPainting () {
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange (event) {
    ctx.lineWidth = event.target.value;
}

function onLineColorChange (event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onLineColorChange);