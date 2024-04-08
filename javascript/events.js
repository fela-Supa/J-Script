// Key-Up
// document.getElementById('input').onkeyup = function () {
//     let input = document.getElementById("input").value;
//     document.getElementById ("output3").innerHTML = input;
// };

document.getElementById('input').addEventListener("keyup", ()=>{
    let input = document.getElementById("input").value;
    document.getElementById ("output3").innerHTML = input;
});

// Change Event
// document.getElementById("manufacturer").onchange = function () {
//     let manufacturer = document.getElementById("manufacturer").value;
//     document.getElementById ("output4").innerHTML = manufacturer;
// };

document.getElementById("manufacturer").addEventListener("change", ()=>{
    let manufacturer = document.getElementById("manufacturer").value;
    document.getElementById ("output4").innerHTML = manufacturer;
});