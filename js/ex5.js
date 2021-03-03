console.log("Jeffry's Output from Tutorial 4 Example 5");

/*

var paraOne = document.getElementById("p1");

var paraTwo = document.getElementById("p2");

paraOne.style.backgroundColor = "Yellow";

paraTwo.style.backgroundColor = "Yellow";

paraTwo.style.fontWeight="bold";

paraOne.style.fontWeight="bold";

*/

const bodyElements = Array.from(document.getElementsByTagName("p"));

for(i=0; i < bodyElements.length; i++){

    const pTags = bodyElements[i];

    pTags.style.backgroundColor = "rgb(255,255,0)";

    pTags.style.fontWeight = "bold";

}





/*
var pListitem = bodyElements.forEach(element => {
    console.log(element);
});


console.log(pListitem[0]);

console.log(pListitem[1]);



//pListitem.style.fontWeight="bold";




/*
function highlight()
{
    for(var i=0; i<pListitem.length; i++)
    {
        pListitem[i].style.color = "yellow";
    }
}
*/

//console.log(highlight(pListitem));



