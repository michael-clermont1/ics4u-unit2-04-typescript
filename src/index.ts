/**
 * This program uses the MrCoxallStack
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-9-24
 */

import Stack from './stack'
import promptSync from 'prompt-sync'

const myNewStack = new Stack()

const prompt = promptSync()
const repeatString = prompt('Enter an amount to repeat: ')
const repeatNumber = parseInt(repeatString)
for (let counter = 0; counter < repeatNumber; counter++) {
  const someNumberString = prompt('Enter an integer: ')
  const someNumberInt = parseInt(someNumberString)
  myNewStack.push(someNumberInt)
}
console.log('The stack before the pop:')
console.log(myNewStack.getStack())

myNewStack.peek()

myNewStack.pop()
console.log('The stack after the pop:')
console.log(myNewStack.getStack())

myNewStack.clear()
console.log('The stack after the clear:')
console.log(myNewStack.getStack())
