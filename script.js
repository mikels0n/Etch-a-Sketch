const sketchpad = document.querySelector('.sketchpad');
const erease = document.querySelector('#erease');
const gridSize = document.querySelector('#grid-size');

function createGrid(divsPerLine = 16) {
    sketchpad.innerHTML = "";
    let size = 420 / divsPerLine + 'px'
    for (let i = divsPerLine * divsPerLine; i !== 0; i--) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = size;
        square.style.height = size;
        square.addEventListener('mouseover',() => {
            square.style.cssText += 'background-color: red;' 
        })
        sketchpad.appendChild(square);
        
    }
}

erease.addEventListener('click', () => {
    createGrid();
});

gridSize.addEventListener('click', () => {
    let numberOfDivs = prompt("How many squares per side? (Maximum: 100)");
    while (numberOfDivs > 100 || numberOfDivs < 1) {
        numberOfDivs = prompt('Wrong number! Choose number between 1 and 100.');
        if (numberOfDivs <= 100 && numberOfDivs > 0) {
            break;
        }
    }
    createGrid(numberOfDivs);
})

window.addEventListener('load', createGrid());
