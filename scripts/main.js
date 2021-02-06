 var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() 
{
    alert('Кликни по картинке');
}

var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Номер 2.jpg') 
    {
      myImage.setAttribute ('src','images/Номер 3.jpg');
    } else 
    {
      myImage.setAttribute ('src','images/Номер 2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
    var myName = prompt('введи имя');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Это мой сайт, ' + myName;
}

if(!localStorage.getItem('имя')) 
{
    setUserName();
} else 
{
    var storedName = localStorage.getItem('имя');
    myHeading.textContent = 'Это мой сайт, ' + storedName;
}

myButton.onclick = function() 
{
    setUserName();
}