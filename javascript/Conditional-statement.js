
//Conditional statement
//if - ELSEIF -ELSE Statement
// document.getElementById("getColor").addEventListener("click", ()=>{
//     let lightColor = document.getElementById('lights').value;

//     if (lightColor == "green") {
//         console.log ("GO");
//     }

//     else if (lightColor == "yellow") {
//         console.log ("WAIT");
//     }

//     else if (lightColor == "red") {
//         console.log ("STOP");
//     }

//     else{
//         console.log("LIGHT NOT WORKING")
//     }
// });

//Write a program that determines whether a given number is positive or negative.

// Define a variable with a number
// document.getElementById("getNumber").addEventListener("click", ()=>{
//     let number = document.getElementById("number").value;

//     // Check if the number is positive or negative
//     if (number > 0) {
//         console.log("The number is positive");
//     } 
//     else if (number < 0) {
//         console.log("The number is negative");
//     }
// });

//2.Write a program that checks if a number is even or odd.
// document.getElementById("getNumber").addEventListener("click", ()=>{
//     let number = document.getElementById("number").value;

//         if (number % 2 === 0) {
//             console.log("The number is Even")
//         } else {
//             console.log ("The number is Odd");
//         }
//     });

//3.Write a program to determine the greater of two numbers.
// document.getElementById("getNumber").addEventListener("click", ()=>{
//     let number1 = document.getElementById("num1").value;
//     let number2 = document.getElementById("num2").value;
//          // Determine the greater of the two numbers
//          if (number1 > number2) {
//             console.log(`${number1} is greater than ${number2}`);
//         } else if (number2 > number1) {
//             console.log(`${number2} is greater than ${number1}`);
//         } else {
//             console.log("Both numbers are equal.");
//         }
// });

//4.Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
document.getElementById("getGrade").addEventListener("click", () => {
    let grade = document.getElementById("grade").value;

    let letterGrade;
    if (grade >= 90) {
        letterGrade = "A";
    } else if (grade >= 70) {
        letterGrade = "B";
    } else if (grade >= 50) {
        letterGrade = "C";
    } else if (grade >= 40) {
        letterGrade = "D";
    } else if (grade >= 20) {
        letterGrade = "E";
    } else {
        letterGrade = "FAIL";
    }

    console.log(`Numerical grade ${grade}, letter grade ${letterGrade}`);
});