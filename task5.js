//get elements by tag name
var item=document.getElementsByTagName('li');

item[2].style.backgroundColor='green';

//using loop
for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
}
//using getElementsByTagName style is also working on new li tag but with class name it will not gonna work as 
//new li doesn't have class so,the style changes doesn't applies on it as it apllies only on the elements which has class name 

