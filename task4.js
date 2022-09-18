var item=document.getElementsByClassName('list-group-item');
//2
item[2].style.backgroundColor='green';
//3

//item.style.fontWeight='bold'; gives error as item is collection of many html elements
//to loop through all elements we are using a for loop.

for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}