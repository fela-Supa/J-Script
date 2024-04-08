/* 
VARIABLES - a location that is used to store data.
We declare a variable using keywords; LET, CONST... (VAR)
values stored in variables declared using LET can be changed during runtime.

FURTHER READING: Variable reassignment

*/

let alexPhone = 123456
let beatricePhone = 654321
let charliePhone = 987654

console.log(alexPhone)
console.log(beatricePhone)
console.log(charliePhone)

alexPhone = 123455
beatricePhone = 654322
charliePhone = 987655

console.log(alexPhone)
console.log(beatricePhone)
console.log(charliePhone)

// Values stored in valiables declared using CONST can't be changed during runtime.
const alexId = 1001
const beatriceId = 1002
const charlieId = 1003

console.log(alexId)
console.log(beatriceId)
console.log(charlieId)

alexId = 1002
beatriceId = 1003
charlieId = 1004

console.log(alexId)
console.log(beatriceId)
console.log(charlieId)