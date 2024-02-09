const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize");
const GRID_DIMENSIONS = 800;
let cellsPerRow = 16;
let cellHeight = GRID_DIMENSIONS / cellsPerRow;

function removeGrid(){
    while(container.lastChild)
        container.removeChild(container.lastChild);
}

function setGrid(){
    container.style.width = (GRID_DIMENSIONS+(cellsPerRow-1)).toString()+"px";
    container.style.height = (GRID_DIMENSIONS+(cellsPerRow-1)).toString()+"px";
}

function buildGrid(){
    for (let i = 0; i < cellsPerRow; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.style.width = (GRID_DIMENSIONS+(cellsPerRow-1)).toString()+"px";
        newRow.style.height = cellHeight.toString()+"px";
        container.appendChild(newRow);
        for (let j = 0; j < cellsPerRow; j++) {
            const newCol = document.createElement("div");
            newCol.style.height = cellHeight.toString()+"px";
            newRow.appendChild(newCol);
        }
    }
}


container.addEventListener("mouseover",(e) => {
    if(e.target.id === "container" || e.target.classList.contains("row")) return;
    e.target.style.background = "red";
})
resizeBtn.addEventListener("click", () => {
    cellsPerRow = prompt("Enter Grid Size");
    cellHeight = GRID_DIMENSIONS / cellsPerRow;
    removeGrid();
    setGrid();
    buildGrid();
});

buildGrid();