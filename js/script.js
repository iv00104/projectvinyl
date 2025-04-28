const track = document.querySelector('.draggable-track');
const panels = document.querySelectorAll('.panel');

Draggable.create(track, {
  type: 'x',
  inertia: true,
  bounds: {
    minX: -track.scrollWidth + window.innerWidth,
    maxX: 0
  }
});

panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    // If already active, reset all
    if (panel.classList.contains('active')) {
      panels.forEach(p => p.classList.remove('active'));
    } else {
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    }
  });
});
