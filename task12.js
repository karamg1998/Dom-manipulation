//var my_name=document.getElementById('name');
//var age=document.getElementById('age');

var submit=document.getElementById('submit');

submit.addEventListener('click',run);

function run(e)
{
    e.preventDefault();
    var new_element=document.createElement('div');
    
    var text1=document.createTextNode("=>Name:"+document.getElementById('name').value+" ");
    new_element.appendChild(text1);
    

    var text2=document.createTextNode("Email:"+document.getElementById('email').value+" ");
    new_element.appendChild(text2);

    var text3=document.createTextNode("Phone:"+document.getElementById('pnumber').value);
    new_element.appendChild(text3);
   
    var insert=document.querySelector('body .container');
    var insert1=document.querySelector('body main')

   insert.insertBefore(new_element,insert1);

   var myobj={
    Name:document.getElementById('name').value,
    Email:document.getElementById('email').value,
    Phone:document.getElementById('pnumber').value
   } 
   var obj_serialised=JSON.stringify(myobj);
  
  
   localStorage.setItem(document.getElementById('email').value,obj_serialised);


}
