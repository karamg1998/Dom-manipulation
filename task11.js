/* var name=document.getElementById('name');
var age=document.getElementById('age'); */
 
   

var submit=document.getElementById('submit');

submit.addEventListener('click',Run)

function Run(e)
{
    e.preventDefault();
    
    var myobj={
    Name:document.getElementById('name').value,
    age:document.getElementById('age').value
   } 
   var obj_serialised=JSON.stringify(myobj);
  
  
   localStorage.setItem('user details',obj_serialised);
}














/* var myobj_deserialised=JSON.parse(localStorage.getItem('user details'));
console.log(myobj_deserialised); */