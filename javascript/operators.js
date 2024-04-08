/* 

OPERATORS - they are used to perform mathematical/logical tasks
+ addition
- subtraction
* multiplication
/ division
> comparison
++ increment
-- decrement
= assignment -> assigns value to variable
== equality  -> checks value similarity between variables
=== strict equality -> checks value and data type similarity between variables
% modulus
! NOT

*/

let firstname = 'John'
let lastname = 'Doe'

// let fullname = firstname + ' ' + lastname

let fullname = `${firstname} ${lastname}`
console.log(fullname)

let num = '100'
let string = "Doe"

let combo = `${num} ${string}`
console.log(combo)

// Discord Assignment

// Number One
let myNumber = 42
console.log(myNumber)

// Number Two
let firstName = 'Peter';
let lastName = 'Njuguna';
let fullName = `${firstName} ${lastName}`;
console.log(fullName)

// Number Three
let temperature = 25
temperature = 30;
console.log(temperature)

// Number Four
let numApples = 10;
numApples = numApples + 5;
console.log(numApples)

// Number Five
let x = 5;
let y = 10;
[y, x] = [x, y];
console.log(x, y)

// Number Six
// const PI = 3.14
// PI = 3.12
// console.log(PI)

// Number Seven
let initialAmount = 100;
initialAmount *= 0.5
console.log(initialAmount)

// Number Eight
let sentence = 'Hello, World!'
let myName = 'Peter'
let updatedSentence = sentence.replace("World", myName);
console.log(updatedSentence)

// Number Nine
let totalScore = 0;
totalScore += 10;
totalScore -= 5;
totalScore *= 2;
console.log(totalScore)

// Number Ten
let num1 = 10;
let num2 = 20;
let num3 = 30;
let average = (num1 + num2 + num3) / 3;
console.log(average)


let student = 1
student++
console.log(student)

student--
console.log(student)

let a = 10
let b = 3
let division = a % b
console.log(division)


