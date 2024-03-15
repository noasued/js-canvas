/* 마우스가 눌려있는 채로 움직일 때부터 손가락을 뗄 때까지 그리기 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

// 유저가 canvas 위에서 마우스를 움직일 때마다 moveTo 호출
// 유저의 마우스가 있는 곳으로 브러쉬 이동 (해당 위치에서 시작해야하기 때문)
let isPainting = false;

// 움직이는동안 paint brush 위치가 마우스가 있는 곳으로 이동
function onMove (event) {

    if (isPainting) { // 마우스를 계속 클릭(누르고있는) 상태면 그린다
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }

    // 마우스를 클릭하고있지 않은 상태면 움직이기만 함
    ctx.moveTo(event.offsetX, event.offsetY);
}

// 마우스 클릭하고있는 상태
function startPainting () {
    isPainting = true;
}

// 마우스를 뗀 상태
function cancelPainting () {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);

// 마우스가 캔버스를 떠나면 mouseup으로 감지
canvas.addEventListener("mouseleave", cancelPainting);