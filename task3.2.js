//examine the document object
//console.dir(document);

console.log(document.URL);
console.log(document.domain);
console.log(document.title);
document.title= 4545;
console.log(document.title);
console.log(document.head);
console.log(document.doctype);
console.log(document.body);
//all return the collection of elements contained by obeject
console.log(document.all);
console.log(document.all[20]);

//to change the values this in not appropriate method because if we add up elemnets
//before the element in which we have do correction than that correction goes to the element which 
//takes place of that element after adding new element.
document.all[20].textContent='mine';

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
