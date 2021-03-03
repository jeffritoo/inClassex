console.log("Jeffry's Output from Tutorial 4 Example 6");

var table = document.createElement("table");

var tblBody = document.createElement('tbody')

table.appendChild(tblBody);

for(i=1; i<13; i++){
  
  var row = document.createElement("tr");

  var data = document.createElement("td");

  if (i % 4 === 0) {
    //data.className = "bluebg";

    data.style.backgroundColor = "rgb(95, 158, 160)";

  }

  data.textContent = i;


  row.appendChild(data);

  tblBody.appendChild(row);


}

var output = document.getElementById("output");

output.appendChild(table);
















/*
const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  */

