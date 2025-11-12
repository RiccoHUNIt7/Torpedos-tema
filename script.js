function TalbleFill(tableId) {
    const table = document.getElementById(tableId);
    var width = parseInt(document.getElementById('szelesseg').value);
    var height = parseInt(document.getElementById('magassag').value);
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
document.addEventListener('DOMContentLoaded', () => {
    tableFill('player');
    tableFill('ai');
});

