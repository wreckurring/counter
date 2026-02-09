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
    const rect = counterBox.getBoundingClientRect();

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


resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
