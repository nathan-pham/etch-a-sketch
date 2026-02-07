function addDiv(target) {
    const newDiv = document.createElement("div");
    target.appendChild(newDiv);
}

let x = 16;
let y = 16;
const container = document.querySelector("#container");

for (let x_iter = 0; x_iter < x; x_iter ++) {
    for (let y_iter = 0; y_iter < y; y_iter ++) {
        addDiv(container);
    }
}