function TableFill(tableId) {
    var PlayerBoat = 3;
    const table = document.getElementById(tableId);
    const widthInput = document.getElementById('szelesseg');
    const heightInput = document.getElementById('magassag');
    var width = parseInt(widthInput.value);
    var height = parseInt(heightInput.value);
    table.innerHTML = '';
    let placingBoats = true;

    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', function() {
                if (placingBoats && PlayerBoat > 0 && !cell.classList.contains('PlayerBoat')) {
                    PlayerBoat--;
                    cell.classList.add('PlayerBoat');
                    if (PlayerBoat === 0) placingBoats = false;
                } else if (!placingBoats && !cell.classList.contains('hit') && !cell.classList.contains('miss')) {
                    if (cell.classList.contains('PlayerBoat')) {
                        cell.classList.add('hit');
                    } else {
                        cell.classList.add('miss');
                    }
                    if (tableId === 'ai') {
                        setTimeout(botMove, 500);
                    }
                }
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function botMove() {
    const playerTable = document.getElementById('player');
    const cells = Array.from(playerTable.getElementsByTagName('td'));
    const available = cells.filter(cell =>
        !cell.classList.contains('hit') && !cell.classList.contains('miss')
    );

    if (available.length === 0) return;

    const randomCell = available[Math.floor(Math.random() * available.length)];
    randomCell.click();
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', function() {
    TableFill('player');
    TableFill('ai');
});