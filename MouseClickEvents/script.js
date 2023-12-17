const clickArea = document.getElementById('clickArea');
const output = document.getElementById('output');

clickArea.addEventListener('click', () => {
    output.textContent = 'Click event detected';
});

clickArea.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    output.textContent = 'Right-click context menu prevented';
});

clickArea.addEventListener('mousedown', (event) => {
    switch (event.button) {
        case 0:
            output.textContent = 'Left mouse button clicked';
            break;
        case 1:
            output.textContent = 'Middle mouse button clicked';
            break;
        case 2:
            output.textContent = 'Right mouse button clicked';
            break;
        default:
            output.textContent = 'Unknown mouse button clicked';
            break;
    }
});

clickArea.addEventListener('mouseup', () => {
    output.textContent = 'Mouse button released';
});

clickArea.addEventListener('dblclick', () => {
    output.textContent = 'Double-click event detected';
});

clickArea.addEventListener('mousemove', (event) => {
    output.textContent = `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`;
});

clickArea.addEventListener('mouseenter', () => {
    output.textContent = 'Mouse entered the area';
});

clickArea.addEventListener('mouseleave', () => {
    output.textContent = 'Mouse left the area';
});

clickArea.addEventListener('mouseover', () => {
    output.textContent = 'Mouse over the area';
});

clickArea.addEventListener('mouseout', () => {
    output.textContent = 'Mouse out of the area';
});
