var newDiv=document.createElement('div');

newDiv.setAttribute('class','newDiv');

newDiv.id='hello';

newDiv.title='DOM';
newDiv.textContent='Hello';
console.log(newDiv);

//pushing to DOM

var insert=document.querySelector('header .container');
var insert1=document.querySelector('header h1');

insert.insertBefore(newDiv,insert1);

//new element
var newLi=document.createElement('li');

newLi.setAttribute('class','list-group-item');


newLi.textContent='Hello';
console.log(newLi);

//pushing to DOM

var insert_li=document.querySelector('div .list-group');
var insert2=document.querySelector('div li');

insert_li.insertBefore(newLi,insert2);


