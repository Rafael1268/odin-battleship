class Ship {
  constructor(length) {
    this.length = length;
    this.hits = this.setLength();
  }

  setLength() {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push("O");
    }
    return newArray;
  }

  hit(num) {
    this.hits[num - 1] = "X";
  }

  isSunk() {
    return this.hits.every((e) => e === "X");
  }
}

const ship = new Ship(5);
