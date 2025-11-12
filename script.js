function TableFill(tableId) {
    const table = document.getElementById(tableId);
    const widthInput = document.getElementById('szelesseg');
    const heightInput = document.getElementById('magassag');
    var width = parseInt(widthInput.value);
    var height = parseInt(heightInput.value);
    table.innerHTML = ''; 

    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', function() {
    TableFill('player');
    TableFill('ai');
});