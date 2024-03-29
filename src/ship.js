export default class Ship {
  #length;

  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  length() {
    return this.#length;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    if (this.#hits >= this.#length) return true;
    return false;
  }
}
