const counter = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const counterBox = document.getElementById("counterBox");

let count = 0;

function updateCount() {
    counter.textContent = count;
    createFloatingNumber(count);
}

function reset() {
    count = 0;
    updateCount();
}

function decrease() {
    if (count <= 0) {
        stopHold(); // 
        alert("Enough kid");
        return;
    }

    count--;
    updateCount();
}

function increase() {
    count++;
    updateCount();
}

function createFloatingNumber(value) {
    const floating = document.createElement("div");
    floating.className = "floating-number";
    floating.textContent = value;

    const randomX = Math.random() * window.innerWidth;
    floating.style.left = randomX + "px";

    floating.style.top = window.innerHeight + "px";

    document.body.appendChild(floating);

    setTimeout(() => {
        floating.remove();
    }, 1400);
}

let holdInterval = null;
let holdTimeout = null;

const HOLD_DELAY = 250;
const HOLD_SPEED = 120; 

function startHold(action) {
    holdTimeout = setTimeout(() => {
        holdInterval = setInterval(action, HOLD_SPEED);
    }, HOLD_DELAY);
}

function stopHold() {
    clearTimeout(holdTimeout);
    clearInterval(holdInterval);

    holdTimeout = null;
    holdInterval = null;
}

resetBtn.addEventListener("click", reset);

increaseBtn.addEventListener("mousedown", () => startHold(increase));
increaseBtn.addEventListener("mouseup", stopHold);
increaseBtn.addEventListener("mouseleave", stopHold);

increaseBtn.addEventListener("click", () => {
    if (!holdInterval) increase();
});

decreaseBtn.addEventListener("mousedown", () => startHold(decrease));
decreaseBtn.addEventListener("mouseup", stopHold);
decreaseBtn.addEventListener("mouseleave", stopHold);

decreaseBtn.addEventListener("click", () => {
    if (!holdInterval) decrease();
});
