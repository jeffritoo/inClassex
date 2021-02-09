console.log("Jeffry's Output from Tutorial 4 Example 6");

let hours = Number(prompt("Hours:"))

let minutes = Number(prompt("Minutes:"))

let seconds = Number(prompt("Seconds:"))

console.log(hours+" Hours "+minutes+" Minutes "+seconds+" Seconds" )

if(seconds == 60){
    newMin = minutes++;
    newSec = "00"
}

if(minutes == 60){
    newHours = hours++;
}

console.log(newHours,newMin,newSec)
