var submit=document.getElementById('submit');

submit.addEventListener('click',Run);

function Run(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('pnumber').value;
    
    var myobj={
        Name:name,
        Email:email,
        Phone:phone
       } 
      
    user(myobj);
    
     
}


    function user(data)
    {

        var obj_serialised=JSON.stringify(data);
        
        localStorage.setItem(data.Email, obj_serialised);

        var main=document.querySelector('.container');
    
        var new_element=document.createElement('li');
        
        new_element.id=data.Email;
       
        var data1=document.createTextNode("=>Name:"+data.Name+"-");
        new_element.appendChild(data1);
    
        var data2=document.createTextNode("Email:"+data.Email+"-");
        new_element.appendChild(data2);
    
        var data3=document.createTextNode("Phone:"+data.Phone+" ");
        new_element.appendChild(data3);
    
    
        var button_e=document.createElement('button');
        button_e.className="edit";
        button_e.textContent="Edit";
        new_element.appendChild(button_e);
    
        var button_d=document.createElement('button');
        button_d.className="delete";
        button_d.textContent="Delete";
        new_element.appendChild(button_d);
        
        main.appendChild(new_element)
    }

   
    
var dele=document.querySelector('.container');
del.addEventListener('click',run2);



function run2(e)
{
    if(e.target.classList.contains('delete'))
    {
        var li=e.target.parentElement;
        del.removeChild(li);
        var id=li.id;
        
        for(var i=0;i<localStorage.length;i++)
      {
        var s=localStorage.key(i);
        if(s===id)
        {
            localStorage.removeItem(s);
            
        }
        
      }
        
    }
}

var edit=document.querySelector('.container');
edit.addEventListener('click',run3);
 
function run3(e)
{

    if(e.target.classList.contains('edit'))
    {
        var li1=e.target.parentElement;
        edit.removeChild(li1);
        var object=JSON.parse(localStorage.getItem(li1.id));
        retrive(object);
        
        for(var i=0;i<localStorage.length;i++)
        {
          var s=localStorage.key(i);
          if(s===li1.id)
          {
              localStorage.removeItem(s);
              
          }
          
        }
        
    }
}

function retrive(user)
{
    var e=document.getElementById('name');
    e.value=user.Name;
    var d=document.getElementById('email');
    d.value=user.Email;
    var c=document.getElementById('pnumber');
    c.value=user.Phone;
}
