//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort(function(a, b){return a-b});
  }

  kind() {
    if ((this.sides[0] + this.sides[1]) <= this.sides[2]) throw error
    if (this.sides[0]  <= 0) throw error
    if (this.sides[0] === this.sides[2]) return 'equilateral'
    if (this.sides[1] === this.sides[2]) return 'isosceles'
    if (this.sides[0] !== this.sides[1]) return 'scalene'

  }
}
