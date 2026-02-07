let grid_size = 16;
let cell_size = 800/grid_size;

function querySize() {
    do {
        grid_size = prompt("What size do you want your Etch-A-Sketch to be? (1-100)");
        cell_size = 800/grid_size;
        resetGrid(container);
        setGrid(container);
    }
    while (grid_size > 100 || grid_size < 1);

}

function addDiv(target, cell_size) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketch");
    newDiv.style.backgroundColor = "red";
    newDiv.style.minWidth = cell_size + "px";
    newDiv.style.minHeight = cell_size + "px";
    target.appendChild(newDiv);
    return newDiv;
}

const container = document.querySelector("#container");

function resetGrid(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function setGrid(grid) {
    for (let x_iter = 0; x_iter < grid_size; x_iter ++) {
        for (let y_iter = 0; y_iter < grid_size; y_iter ++) {
            let newDiv = addDiv(grid, cell_size);
            newDiv.addEventListener("pointerenter", (e) => {
                newDiv.style.backgroundColor = "blue";
            });
        }
    }
}

setGrid(container);