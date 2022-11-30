const grid = document.querySelector('#grid');

const input = document.querySelector('#input');
input.addEventListener('click', () => {
    let value = parseInt(prompt("Enter a number between 1 and 100", ''), 10);
        if (value < 1 || value > 100) { 
            alert('try again!') 
            return
        };
    console.log(value);
    document.getElementById('gridVal').innerHTML = value;
    createGrid(value);
});

// from https://github.com/parkercon/etch-a-sketch/blob/main/script.js
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(value) {

    removeAllChildNodes(grid);

    grid.setAttribute('style', 
        `grid-template-columns: repeat(${value}, 2fr); 
        grid-template-rows: repeat(${value}, 2fr);`);

    for (let i = 0; i < value * value; i++){
        const square = document.createElement('div')
        square.classList.add('cell');
        square.addEventListener('mouseover', (event) => {
            square.setAttribute('style', `background-color: black;`);
        });
        grid.appendChild(square);
    }
};

createGrid();

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    removeAllChildNodes(grid);
});