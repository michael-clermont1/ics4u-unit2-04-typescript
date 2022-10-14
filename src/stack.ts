/**
 * This class creates an integer stack
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-3
 */

class Stack {
  readonly stackArray: number[] = []

  // getters
  public getStack(): number[] {
    return this.stackArray
  }

  // methods
  public push(pushedNumber: number): void {
    // add a number to the array
    if (isNaN(+pushedNumber)) {
      console.log('That is not a number.')
    } else {
      this.stackArray.push(pushedNumber)
    }
  }

  public pop(): void {
    // remove a number to the array
    if (this.stackArray.length === 0) {
      console.log('You cannot pop without values in the array')
    } else {
      this.stackArray.pop()
    }
  }

  public peek(): void {
    // get the first value of an array
    if (this.stackArray.length === 0) {
      console.log('You cannot get the peak without any numbers!')
    } else {
      console.log(`The peek is: ${this.stackArray[0]}`)
    }
  }

  public clear(): void {
    // clears the entire list
    this.stackArray.splice(0)
  }
}
export = Stack
