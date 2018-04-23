var form = document.getElementById('frm');
var item =document.getElementById('list');

form.addEventListener('submit',todo);
item.addEventListener('click',Remove);

function todo(e)
{
    
	e.preventDefault();

    var value=document.getElementById('ut').value;
   // console.log(value);
   if(value =="")
   {
   	alert('please enter the task for today');
   }
   else
   {
   var li=document.createElement('li');
   var button=document.createElement('button');
   var i=document.createElement('i');
   button.className="btn btn-default btn-info float-right";
   i.className="far fa-trash-alt";
   button.appendChild(i);
   console.log(i);
   li.appendChild(button);
   console.log(button);

   li.className="list-group-item";
   li.appendChild(document.createTextNode(value));
   item.appendChild(li);

   console.log(li);
}
}
function Remove(e)
  {
  	if(e.target.classList.contains('float-right'))
  	{
  		
  		var li=e.target.parentElement;
  		item.removeChild(li);
  	}

   }
function Clock()
{
var fullDate=new Date();
//console.log(fullDate.getMinutes());


var hours=fullDate.getHours();
if(hours>12)
{
	hours=hours-12;
}
if(hours<10)
{
	hours='0'+hours;
}
hours = hours + ':';
var minutes=fullDate.getMinutes();
if(minutes<10)
{
	minutes='0' + minutes;
}
minutes = minutes+ ':';
var seconds=fullDate.getSeconds();
if(seconds<10)
{
	seconds='0'+seconds;
}
//console.log(hours);
//console.log(minutes);
document.getElementById('hour').innerHTML=hours;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;

}
setInterval(Clock,1000);

var fullDate=new Date();
var date=fullDate.getDate();
date=date +' / ';
console.log(date);
var month=fullDate.getMonth()+1;
month=month +' / ';
console.log(month);
var year=fullDate.getFullYear();
console.log(year);
document.getElementById('date').innerHTML=date;
document.getElementById('month').innerHTML=month;
document.getElementById('year').innerHTML=year;