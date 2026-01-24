const counter = document.getElementById("count");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

function updateCount() {
    counter.textContent = count;
}

function reset() {
    count = 0;
    updateCount();
}

function decrease() {
    count--;
    if (count<0) {
        alert("Enough kid");
        return;
    }
    updateCount();
}

function increase() {
    count++;
    updateCount();
}

resetBtn.addEventListener("click",reset);
increaseBtn.addEventListener("click",increase);
decreaseBtn.addEventListener("click",decrease);

