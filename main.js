Nayebare Maureenconsole.log('Hello World!');
//for the following lines of code, elements will be the representative of the document.getElementsByClassName. then, for i<elements.length is to select the while thing. That's it//
var elements =document.getElementsByClassName('big-green');
for(let i=0;i<elements.length;i++)
{elements[i].style.fontSize='25px';
    elements[i].style.color='purple';
}
function getValues(){var firstName=document.getElementsByName('firstName')[0].value;
    var lastName=document.getElementsByName('lastName')[0].value;
    var fullName='Your name is :'+ firstName+''+lastName;
    alert(fullName);
}
console.log(alerted);
//This is for the querySelector//
document.querySelectorAll('#demo')[0].innerHTML='Iam Loved';
var ele=document.querySelectorAll('blue');
for(let a=0;a<ele.length;a++)
{ele[a].style.color='blue';}
