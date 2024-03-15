/* 모드에 따라 캔버스에 색깔 채우기 or 선으로 그리기*/
/* Destroy 버튼 클릭 시 화면 초기화 */
/* Eraser button */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(
        document.getElementsByClassName("color-option")
    );

// get button
const modeBtn = document.getElementById("mode-btn"); // mode button
const destroyBtn = document.getElementById("destroy-btn"); // destroy button
const eraserBtn = document.getElementById("eraser-btn"); // eraser button

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.color = color.value;

let isPainting = false;
let isFilling =false;

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

//모드 변경
function onModeClick () {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

//캔버스 클릭 시 색깔 채우기
function onCanvasClick () {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

//캔버스 비우기
function onDestroyClick () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//Eraser 버튼 클릭
function onEraserClick () {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onLineColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);