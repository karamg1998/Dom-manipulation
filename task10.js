var first_name=document.getElementById('first_name');
var last_name=document.getElementById('last_name');

var submit=document.getElementById('submit');

submit.addEventListener('click',run);

function run(e)
{
    e.preventDefault();
    localStorage.setItem('First Name',first_name.value);
    localStorage.setItem('Last Name',last_name.value);
    
}