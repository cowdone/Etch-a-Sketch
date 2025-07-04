const container = document.querySelector("#gridContainer")
const btn = document.querySelector(".btn")
createGrid(16);

btn.addEventListener("click", () => {
    let prompt1 = prompt("Enter a number from 1-100")
    if(prompt1 >= 1 && prompt1 <= 100) {
        container.replaceChildren("");
        createGrid(prompt1);
    } 

})
function createGrid(squaresPerSide) {
    const Measurements = 640/squaresPerSide
    let pxMeasurements = `${Measurements}px`
    const totalSquares = squaresPerSide * squaresPerSide
    for(i=0; i < totalSquares;i++) {
        const squares = document.createElement("div")
        squares.classList.add("grid")
        squares.style.width = pxMeasurements;
        squares.style.height = pxMeasurements;
        squares.addEventListener("mouseover", () => {
            if(!squares.style.backgroundColor) {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256)
                const blue = Math.floor(Math.random() * 256)
                squares.style.backgroundColor = `rgb(${red},${blue},${green})`
                squares.style.opacity = 0.4;
            } else {
                squares.style.opacity = Number(squares.style.opacity) + 0.1;
            }
        })
        container.appendChild(squares)
    }
}

        // squares.addEventListener("mouseover", () => {
        //     squares.style.backgroundColor = "black";
        // })