console.log("Jeffry's Output from Tutorial 4 Example 6");

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



var descList = document.createElement("dl");

//loop to add terms and definitions

words.forEach(dl =>{
  //Create dt and dd
  const dtElement = document.createElement("dt");
  const ddElement = document.createElement("dd");

  dtElement.textContent = dl.term;
  ddElement.textContent = dl.definition;

  dtElement.style.fontWeight = "bold";

  // add them to the list

  descList.appendChild(dtElement);
  descList.appendChild(ddElement);

});

//add dl to HTML in DIV tag

const divElement = document.getElementById('content');

divElement.appendChild(descList);






