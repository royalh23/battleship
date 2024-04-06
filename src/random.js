function getCoords(r, c) {
  return [Math.floor(Math.random() * r), Math.floor(Math.random() * c)];
}

function getDirection() {
  return Math.random() < 0.5 ? 'horizontal' : 'vertical';
}

export { getCoords, getDirection };
