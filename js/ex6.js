console.log("Jeffry's Output from Tutorial 4 Example 6");

const cobElement = document.createElement("li");

cobElement.id = "cob "

cobElement.textContent = "<a href = https://www.csulb.edu/college-of-business> College of Business </a>"

document.getElementById("links").insertBefore(cobElement,document.getElementById("is"));
