class Ship {
  constructor(length) {
    this.length = length;
    this.hits = length;
  }

  // Mark a spot hit
  hit() {
    this.hits -= 1;
  }

  // Check if the ship has sunk
  isSunk() {
    if (this.hits === 0) return true;
    return false;
  }
}

export default Ship;
