// LOOPS - allow our programs to perform repetitive tasks
// for loop
let num = 1;
console.log(num);

num++;
console.log(num);

for (let num = 1; num <= 1000; num++) {
    console.log(num);
}



/*
definition (initialisation; condition; iteration){
code to be exectuted
}
*/

 /*
        EXERCISE
-create the multiplication table for 1 -> 19
OUTPUT
// MULTIPLICATION TABLE FOR 1
        // 1 x 1 = 1
             |
             |
             |
        // 1 x 19 = 19
// MULTIPLICATION TABLE FOR 19 // 
        //19 x 1 = 1
             |
             |
             |
        // 19 x 19 = 361 */

    function printMultiplicationTable(number) {
        console.log(`// MULTIPLICATION TABLE FOR ${number}`);
            for (let i = 1; i <= 19; i++) {
                console.log(`\t// ${number} x ${i} = ${number * i}`);
            }
        }
        
        // Generate multiplication table from 1 to 19
        for (let num = 1; num <= 19; num++) {
            printMultiplicationTable(num);
        }

            

    // function printMultiplicationTable() {
    //     console.log(`// MULTIPLICATION TABLE FOR 19`);
    //         for (let i = 1; i <= 19; i++) {
    //             console.log(`\t// 19 x ${i} = ${19 * i}`);
    //         }
    //     }
        
    //     // Generate multiplication table from 19 to 1
    //         printMultiplicationTable(num);