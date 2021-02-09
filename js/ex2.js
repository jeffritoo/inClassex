/* Tutorial 4
 Example 2 JavaScript code
*/
console.log("Jeffry's Output from Tutorial 4 Example 2");

const dayWeek = prompt("Pick a day of the week:")

switch (dayWeek){
    
    case "mon":
        document.write("tue");
        console.log("tue");
        break;
    
    case "tue":
        document.write("wed");
        console.log("wed");
        break;

    case "wed":
        document.write("thu");
        console.log("thu");
        break;

    case "thu":
        document.write("fri");
        console.log("fri");
        break; 

    case "fri":
        document.write("sat");
        console.log("sat");
        break;   

    case "sat":
        document.write("sun");
        console.log("sun");
        break;

    case "sun":
        document.write("mon");
        console.log("mon");
        break;
}