gsap.registerPlugin(Draggable);

Draggable.create('.container', {
  type: 'x',
  inertia: true,
  bounds: {minX: -1000, maxX: 0}
});