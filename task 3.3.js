//get element by id
//console.log(document.getElementById('header-title'));

var header_title=document.getElementById('header-title')
var header=document.getElementById('main-header')
//console.log(header_title);
//header_title.textContent='hello';
//header_title.innerText='OMG';
//console.log(header_title);

//inertext and textcontent
//innertext basically focused style and textcontecnt not pay attention to style
//if take an example <h1>hello><span style="display:none">omg</span></h1>
//now text content will show hello omg bu innertext will only show hello
//as inner text pays attention to styling 

//header_title.innerHTML='<h3>my name</h3>';
//so by doing this we are not changing h1 to h3 but instead of that we are putting h3 inside h1.

header_title.style.border="10px solid black";
header.style.borderBottom="10px solid black";

var add_item=document.getElementsByClassName('title');
console.log(add_item[0]);
add_item[0].style.fontWeight='bold';
add_item[0].style.backgroundColor='green';
