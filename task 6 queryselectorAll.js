//quertSelectorAll
var titles=document.querySelectorAll('li');
console.log(titles);

/* for(var i=0;i<titles.length;i=i+2)
{
     titles[i].style.backgroundColor='green';
}
    */

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='red';
}



