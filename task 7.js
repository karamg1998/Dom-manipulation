//traversing the DOM
//var item=document.querySelector('#items');

//parentNode

/* console.log(item.parentNode);
item.parentNode.style.backgroundColor='gray';
console.log(item.parentNode.parentNode); */

//parentElement

/* console.log(item.parentElement);
item.parentElement.style.backgroundColor='gray';
console.log(item.parentElement.parentElement); */

//childNodes

/* console.log(item.childNodes); //here text nodes represents the line breaks (nodeList) */

//childern

/* console.log(item.children);//this will not show us the text nodes only show's childerns(HTML collection)
//to access particular childern
console.log(item.children[0]);
//to do some changes with that
item.children[0].style.color='red';
item.children[1].style.fontWeight='bold';
 */

//firstChild
 //console.log(item.firstChild);//it gives us text node as in childerns at first a line break comes first its like childNodes


 //firstElementchild

 /* console.log(item.firstElementChild);
 item.firstElementChild.style.color='green';
 item.firstElementChild.textContent='green';
 */

 //lastchild

 //console.log(item.lastChild);//it gives us text node as in childerns at first a line break comes first its like childNodes
 
 //lastElementchild
 
 /* console.log(item.lastElementChild);
 item.lastElementChild.style.color='green';
 item.lastElementChild.textContent='green'; */

 //nextSibling

 //console.log(item.nextSibling);//it also gives us text as it also includes the line breaks(nodeList)

 //nextElementSibling
 
 //console.log(item.nextElementSibling);//gives null as no sibling present after that

 //previousSibling

 //console.log(item.previousSibling);//it also gives us text as it also includes the line breaks(nodeList)

//previousElementSibling

/* console.log(item.previousElementSibling);
item.previousElementSibling.textContent='hello world';
item.previousElementSibling.style.color='red'; */

//createElement

var h2=document.createElement('h2');
//adding class
h2.className='new heading';
//adding Id
h2.id='hello';

/* //adding textContent
h2.textContent='heading'; */
//add attribute

h2.setAttribute('title','new attribute');
console.log(h2);

//appendChild
var h2_text=document.createTextNode('heading');
h2.appendChild(h2_text);

//to push inside the DOM

var insert=document.querySelector('header .container');
var insert1=document.querySelector('header h1');

insert.insertBefore(h2,insert1);

h2.style.fontSize='30px';
h2.style.backgroundColor='red';
h2.style.color='green';





