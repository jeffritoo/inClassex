/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Jeffry's Output from Tutorial 4 Example 1");

let names = String(prompt("Enter your Name:"))
let units = Number(prompt("Enter # of units completed:"))

if (units <= 30) {
    document.write(names + "is a Freshman");
    console.log(names + "is a Freshman");
} else if ((units >= 31) && (units <= 60)) {
    document.write(names + "is a Sophmore");
    console.log(names + "is a Sophmore");
} else if ((units >= 61) && (units <= 90)) {
    document.write(names + "is a Junior");
    console.log(names + "is a Junior");
} else if (units > 91) {
    document.write(names +"is a Senior");
    console.log(names +"is a Senior");
}
