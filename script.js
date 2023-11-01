const sketchpad = document.querySelector('.sketchpad');

function createGrid(divsPerLine = 16) {
    sketchpad.innerHTML = "";
    let size = 420/16 + 'px'
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

window.addEventListener('load', createGrid());
