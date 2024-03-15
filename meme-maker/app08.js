/* 예쁜 색상 미리 제공 후 선택할 수 있도록 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color"); // get color
const colorOptions = Array.from( // array로 만들어줌
        document.getElementsByClassName("color-option")
    ); // get color option

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

function onColorClick (event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onLineColorChange);

// 색깔 클릭할 때마다 동작
colorOptions.forEach(color => color.addEventListener("click", onColorClick));