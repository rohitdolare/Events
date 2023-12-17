const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', draw);

function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

function draw(event) {
  if (!isDrawing) return;

  event.preventDefault();
  const touches = event.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const { clientX, clientY, identifier } = touches[i];
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
    
    if (event.type === 'touchstart') {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (event.type === 'touchmove') {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}

