class Ship {
  constructor(length) {
    this.length = length;
    this.hits = this.setLength();
  }

  // Create an array to keep track of hits
  setLength() {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push('O');
    }
    return newArray;
  }

  // Mark a spot hit
  hit(num) {
    this.hits[num - 1] = 'X';
  }

  // Check if the ship has sunk
  isSunk() {
    return this.hits.every((e) => e === 'X');
  }
}

export default Ship;
