const container = document.querySelector("#container");
const rowArray = [];
for (let i = 0; i < 16; i++) {
    const newRow = document.createElement("div");
    rowArray.push(newRow);
    container.appendChild(newRow);
    for (let j = 0; j < 16; j++) {
        const newCol = document.createElement("div");
        newCol.classList.add("cell");
        newRow.appendChild(newCol);
    }
}

container.addEventListener("mouseover",(e) => {
    if(e.target.id === "container") return;
    e.target.style.background = "red";
})
