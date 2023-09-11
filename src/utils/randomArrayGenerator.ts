class RandomArrayGenerator {
  private min: number;
  private max: number;
  private count: number;

  private permutations: number[][];
  private randomArray: number[];

  constructor(min: number, max: number, count: number) {
    this.min = min;
    this.max = max;
    this.count = count;

    this.permutations = [];

    this.randomArray = this.generateRandomArray();
    this.savePermutation(this.randomArray);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.getRandomInt(0, i);
      [array[i], array[j]] = [array[j], array[i]] as [number, number]; // Swap elements
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

  savePermutation(array: number[]) {
    this.permutations.unshift(array.slice());
  }

  generateNextPermutation() {
    const newArray = this.generateRandomArray();
    this.savePermutation(newArray);
  }

  getAllPermutations() {
    return this.permutations;
  }

  erasePermutations() {
    this.permutations = []; // Reset the permutations to an empty array

    this.randomArray = this.generateRandomArray(); // Generate a new initial random array
    this.savePermutation(this.randomArray); // Save the new initial random array
  }
}

const minNumber = 1;
const maxNumber = 100;
const count = 6; // Number of integers in the array

export const generator = new RandomArrayGenerator(minNumber, maxNumber, count);

generator.generateNextPermutation();

console.log(generator.getAllPermutations());
