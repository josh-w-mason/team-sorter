class RandomArrayGenerator {
  constructor(min, max, count) {
    this.min = min;
    this.max = max;
    this.count = count;
    this.permutationIndex = 1;
    this.permutations = {};

    // Generate the initial random array
    this.randomArray = this.generateRandomArray();
    this.savePermutation(this.randomArray);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.getRandomInt(0, i);
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  generateRandomArray() {
    const array = [];
    for (let i = 0; i < this.count; i++) {
      array.push(i + this.min);
    }
    this.shuffleArray(array);
    return array;
  }

  savePermutation(array) {
    this.permutations[this.permutationIndex] = array.slice();
    this.permutationIndex++;
  }

  generateNextPermutation() {
    const newArray = this.generateRandomArray();
    this.savePermutation(newArray);
  }

  getAllPermutations() {
    return this.permutations;
  }
}

const minNumber = 1;
const maxNumber = 100;
const count = 5; // Number of integers in the array

const generator = new RandomArrayGenerator(minNumber, maxNumber, count);

generator.generateNextPermutation();

console.log(generator.getAllPermutations());
