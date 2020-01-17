import { isFlowDeclaration } from "@babel/types";

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {

  const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

  let firstColorNumber = resistorColors.indexOf(colors[0])

  let secondColorNumber = resistorColors.indexOf(colors[1])

  return parseInt("" + firstColorNumber + secondColorNumber)
}
