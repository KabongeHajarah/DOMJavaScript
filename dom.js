const title= document.getElementById('practiceDom');
console.log(title);

const listitems=document.querySelectorAll('li');
for (let i = 0; i< listitems.length;i++) {
    listitems[i].style.fontSize='1 rem';   
}


console.log(listitems)

const cointaner=document.querySelector('div');
cointaner.style.backgroundColor='grey'
cointaner.style.color='maroon'


//creating element
const ul=document.querySelector('ul');
const li=document.createElement('li');
ul.append(li)

//adding text to the new list i have created 
const text=document.createTextNode('Lets connect') //is used to add text to newly created
li.appendChild(text)
console.log(ul);

//Modifying the text
const itemsOfUl=document.querySelector('.lists');
console.log(itemsOfUl.innerText);  //only the texts
console.log(itemsOfUl.innerHTML); //returns space n the elements
console.log(itemsOfUl.textContent);  //returns the content with space


//modifying attributes and classes
li.setAttribute('id','hdng')






