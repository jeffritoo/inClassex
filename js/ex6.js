console.log("Jeffry's Output from Tutorial 4 Example 6");
/*
const cobElement = document.createElement("li");

cobElement.id = "cob "

cobElement.textContent = "<a href = https://www.csulb.edu/college-of-business> College of Business </a>"

document.getElementById("links").insertBefore(cobElement,document.getElementById("is"));
*/

var a = document.createElement('a');

var linkText = document.createTextNode('College of Business');

a.appendChild(linkText);

a.title = "College of Business";

a.href = "https://www.csulb.edu/college-of-business";


document.getElementById("links").insertBefore(a,document.getElementById("is"));

