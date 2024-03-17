/* 모드에 따라 캔버스에 색깔 채우기 or 선으로 그리기*/
/* Destroy 버튼 클릭 시 화면 초기화 */
/* Eraser button */
/* Add file button */
/* text input */
/* save image */

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
const fileInput = document.getElementById("img-file"); // file button
const textInput = document.getElementById("text"); // get text input
const saveBtn = document.getElementById("save"); // get save button
const fontBtn = document.getElementById("font-btn");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.color = color.value;
ctx.lineCap = "round"; // 선 둥글리기

let isPainting = false;
let isFilling = false;

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

function onLineColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
}

//모드 변경
function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

//캔버스 클릭 시 색깔 채우기
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

//캔버스 비우기
function onDestroyClick() {
    if (confirm("Are you sure to delete everything on the canvas?")) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

//Eraser 버튼 클릭
function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

//파일 첨부
//브라우저의 javascript는 파일을 읽을 수 없음
//유저가 파일을 선택했을 때만 javascript에게 보이게 됨
//유저가 파일을 선택했기 때문에 해당 파일은 브라우저의 메모리 속에 존재함
//url로 유저가 선택한 파일에 접근
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

//더블클릭 시 텍스트 출력
function onDoubleClick(event) {
    const text = textInput.value;

    if (text !== "") { // text가 비어있지 않으면
        ctx.save(); //ctx의 이전상태를 저장
        ctx.lineWidth = 1;
        ctx.font = "48px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore(); //몇 가지 변경 후 다시 되돌리기
    }
}

// save canvas image
function onSaveClick(event) {
    // image url로 링크하여 다운로드하게 할 것
    const url = canvas.toDataURL();
    const a = document.createElement("a"); // create a fake link
    a.href = url;
    a.download = "myDrawing.png";
    a.click(); // click the link
}

// change font
function onFontClick(event) {
    alert('font');
}

canvas.addEventListener("dblclick", onDoubleClick);
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
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
// fontBtn.addEventListener("click", onFontClick);