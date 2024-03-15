/* 선 굵기 조정 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width"); // get line width

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

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
    // event에 접근할 수 있다는 사실이 중요함
    // event는 input의 새로운 value를 알려주기 때문
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);