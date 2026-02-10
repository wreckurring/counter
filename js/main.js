const counter = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const counterBox = document.getElementById("counterBox");

let count = 0;
let zeroHitCount = 0;

/* ================= COUNTER UPDATE ================= */

function updateCount() {
    counter.textContent = count;
    createFloatingNumber(count);
}

/* ================= RESET ================= */

function reset() {
    count = 0;
    zeroHitCount = 0;
    updateCount();
}

/* ================= DECREASE ================= */

function decrease() {
    if (count <= 0) {
        stopHold();
        zeroHitCount++;

        triggerLimitFeedback();

        if (zeroHitCount >= 3) {
            showEnoughText();
        }

        return;
    }

    zeroHitCount = 0;
    count--;
    updateCount();
}

/* ================= INCREASE ================= */

function increase() {
    zeroHitCount = 0;
    count++;
    updateCount();
}

/* ================= FLOATING NUMBER ================= */

function createFloatingNumber(value) {
    const floating = document.createElement("div");
    floating.className = "floating-number";
    floating.textContent = value;

    const randomX = Math.random() * window.innerWidth;
    floating.style.left = randomX + "px";
    floating.style.top = window.innerHeight + "px";

    document.body.appendChild(floating);

    setTimeout(() => floating.remove(), 1400);
}

/* ================= SHAKE FEEDBACK ================= */

function triggerLimitFeedback() {
    counterBox.classList.add("shake", "red-glow");

    setTimeout(() => {
        counterBox.classList.remove("shake", "red-glow");
    }, 300);
}

/* ================= BIG ENOUGH TEXT ================= */

function showEnoughText() {
    const text = document.createElement("div");
    text.className = "enough-text";
    text.textContent = "ENOUGH KID!";

    document.body.appendChild(text);

    setTimeout(() => text.remove(), 1200);
}

/* ================= HOLD BEHAVIOR ================= */

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

/* ================= EVENT LISTENERS ================= */

resetBtn.addEventListener("click", reset);

/* -------- INCREASE -------- */

increaseBtn.addEventListener("mousedown", () => startHold(increase));
increaseBtn.addEventListener("mouseup", stopHold);
increaseBtn.addEventListener("mouseleave", stopHold);

increaseBtn.addEventListener("click", () => {
    if (!holdInterval) increase();
});

/* -------- DECREASE -------- */

decreaseBtn.addEventListener("mousedown", () => startHold(decrease));
decreaseBtn.addEventListener("mouseup", stopHold);
decreaseBtn.addEventListener("mouseleave", stopHold);

decreaseBtn.addEventListener("click", () => {
    if (!holdInterval) decrease();
});
