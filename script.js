let x = 16;
let y = 16;
let x_size = 800/x;
let y_size = 800/y;

function addDiv(target, x_size, y_size) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketch");
    newDiv.style.backgroundColor = "red";
    newDiv.style.minWidth = x_size + "px";
    newDiv.style.minHeight = y_size + "px";
    target.appendChild(newDiv);
}

const container = document.querySelector("#container");

for (let x_iter = 0; x_iter < x; x_iter ++) {
    for (let y_iter = 0; y_iter < y; y_iter ++) {
        addDiv(container, x_size, y_size);
    }
}