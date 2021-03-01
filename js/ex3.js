console.log("Jeffry's Output from Tutorial 4 Example 3");



const bodyNodes = (node,index)=>{

    const nodeElements = node.childNodes;
    console.log(nodeElements[index]); 
};


bodyNodes(document.body,1);

bodyNodes(document.body,3);

bodyNodes(document.body,5);

bodyNodes(document.body,7);

bodyNodes(document.body,9);

bodyNodes(document.body,10);






/*
console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[3]);

console.log(document.body.childNodes[5]);

console.log(document.body.childNodes[7]);

console.log(document.body.childNodes[9]);

console.log(document.body.childNodes[10]);
*/